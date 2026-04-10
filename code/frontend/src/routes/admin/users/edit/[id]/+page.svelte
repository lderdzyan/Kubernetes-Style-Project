<script lang="ts">
	import UserSettingsView from '$lib/components/adminComponents/users/addingUsers/UserSettingsView.svelte';

	let { data } = $props();
	let { id } = data;
</script>

<UserSettingsView {id} />
