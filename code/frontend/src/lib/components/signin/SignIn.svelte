<script lang="ts">
	import { t } from 'svelte-i18n';
	import { afterNavigate, goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import * as Card from '$lib/components/ui/card';
	import { login } from '$lib/api/auth';
	import { saveAuthUser } from '$lib/stores/users.svelte';
	import { UserRole } from '$lib/types/user';
	import { loginSchema, type LoginData } from '$lib/utils/zodValidation';
	import Spinner from '../shared/Spinner.svelte';
	import { Eye, EyeOff } from 'lucide-svelte';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import { onMount } from 'svelte';
	import { redirectIfAuthenticated } from '$lib/utils/userSessionVerification';

	let username: string = $state('');
	let password: string = $state('');
	let loading: boolean = $state(false);
	let showPassword: boolean = $state(false);
	let checking: boolean = $state(true);
	let redirecting = $state(false);
	afterNavigate(() => (redirecting = false));

	let errors = $state<Partial<Record<keyof LoginData | 'global', string>>>({});

	onMount(async () => {
		await redirectIfAuthenticated();
		checking = false;
	});

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		errors = {};
		loading = true;

		try {
			const result = loginSchema.safeParse({
				username,
				password
			});

			if (!result.success) {
				errors = Object.fromEntries(
					result.error.issues.map((issue) => [issue.path[0], $t(issue.message)])
				);
				loading = false;
				return;
			}

			const data = await login(username.trim(), password.trim());

			if (data.token && data.user) {
				saveAuthUser({
					id: data.user.id,
					role: data.user.role,
					token: data.token
				});
				redirecting = true;
				goto(data.user.role === UserRole.ADMIN ? '/admin' : '/manager');
				return;
			}
		} catch (err) {
			errors.global = getErrorMessage(err, $t);
			console.error('Login failed:', err);
		} finally {
			if (!redirecting) loading = false;
		}
	};
</script>

<div class="animated-bg flex min-h-screen flex-col items-center justify-center">
	<div class="mb-8">
		{#if errors.global}
			<p class="text-center text-sm text-red-600">{errors.global}</p>
		{/if}
	</div>

	{#if loading || checking}
		<Spinner />
	{:else}
		<Card.Root class="w-full max-w-sm">
			<Card.Header>
				<Card.Title class="text-center">{$t('loginForm.title')}</Card.Title>
			</Card.Header>
			<Card.Content>
				<form onsubmit={handleSubmit}>
					<div class="flex flex-col gap-6">
						<div class="grid gap-2">
							<Label for="userName">{$t('loginForm.userName')}</Label>
							<Input
								id="userName"
								type="text"
								placeholder={$t('loginForm.usernamePlaceholder')}
								bind:value={username}
							/>
							{#if errors.username}
								<p class="text-sm text-red-500">{errors.username}</p>
							{/if}
						</div>

						<div class="grid gap-2">
							<Label for="password">{$t('loginForm.password')}</Label>

							<div class="relative">
								<Input
									id="password"
									type={showPassword ? 'text' : 'password'}
									placeholder={$t('loginForm.passwordPlaceholder')}
									bind:value={password}
									class="pr-10"
								/>

								<button
									type="button"
									onclick={() => (showPassword = !showPassword)}
									class="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 transition-colors hover:text-gray-800"
								>
									{#if showPassword}
										<EyeOff size={18} />
									{:else}
										<Eye size={18} />
									{/if}
								</button>
							</div>
							{#if errors.password}
								<p class="text-sm text-red-500">{errors.password}</p>
							{/if}

							<div class="grid gap-2">
								<Button type="submit" class="mt-4 w-full" disabled={loading}>
									{loading ? $t('loginForm.loggingInBtn') : $t('loginForm.loginBtn')}
								</Button>
							</div>
						</div>
					</div>
				</form>
			</Card.Content>
		</Card.Root>
	{/if}
</div>
