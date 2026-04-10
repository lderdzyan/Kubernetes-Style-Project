import { ProductMeasurement } from '$lib/types/product';
import { UserRole } from '$lib/types/user';
import { z } from 'zod';

export const loginSchema = z.object({
	username: z.string().trim().min(1, 'errors.auth.missingField').max(50),
	password: z.string().trim().min(8, 'errors.auth.passwordError')
});

export const userSchema = z.object({
	name: z.string().trim().min(1, { message: 'errors.users.zod.name' }).max(100),

	username: z.string().trim().min(3, { message: 'errors.users.zod.username' }).max(50),

	password: z
		.string()
		.min(1, { message: 'errors.users.zod.passwordRequired' })
		.min(8, { message: 'errors.users.zod.passwordMin' }),

	role: z.enum(
		{
			ADMIN: UserRole.ADMIN,
			MANAGER: UserRole.MANAGER
		},
		'errors.users.zod.role'
	),

	status: z.boolean().refine((val) => val === true, {
		message: 'errors.users.zod.status'
	})
});

export const shopSchema = z.object({
	code: z.string().min(1, { message: 'errors.shops.zod.code' }),
	name: z.string().min(1, { message: 'errors.shops.zod.name' }),
	address: z.string().min(1, { message: 'errors.shops.zod.address' }),

	status: z.coerce.boolean().refine((val) => val === true || val === false, {
		message: 'errors.shops.zod.status'
	}),

	phone: z.string().optional(),
	vat: z.string().optional(),
	createdAt: z.string().optional()
});

export const productSchema = z.object({
	name: z.string().min(1, { message: 'errors.product.zod.name' }),
	code: z.string().min(1, { message: 'errors.product.zod.code' }),

	measurement: z.enum(
		{
			PIECE: ProductMeasurement.PIECE,
			KG: ProductMeasurement.KG,
			LITER: ProductMeasurement.LITER,
			METER: ProductMeasurement.METER
		},
		'errors.product.zod.measurement'
	),

	categoryId: z.string().min(1, { message: 'errors.product.zod.category' }),

	price: z
		.union([z.number(), z.undefined()])
		.refine((val) => val !== undefined, {
			message: 'errors.product.zod.price'
		})
		.refine((val) => typeof val === 'number', {
			message: 'errors.product.zod.priceType'
		})
		.refine((val) => val! > 0, {
			message: 'errors.product.zod.price'
		})
});

export type LoginData = z.infer<typeof loginSchema>;
export type UserFormValues = z.infer<typeof userSchema>;
export type ProductFormValues = z.infer<typeof productSchema>;
export type ValidateShopInputs = z.infer<typeof shopSchema>;
