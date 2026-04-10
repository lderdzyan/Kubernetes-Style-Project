import { P as ProductMeasurement } from './product2-CjFRccXX.js';
import { z } from 'zod';

var UserRole = /* @__PURE__ */ ((UserRole2) => {
  UserRole2["ADMIN"] = "admin";
  UserRole2["MANAGER"] = "manager";
  return UserRole2;
})(UserRole || {});
z.object({
  username: z.string().trim().min(1, "errors.auth.missingField").max(50),
  password: z.string().trim().min(8, "errors.auth.passwordError")
});
const userSchema = z.object({
  name: z.string().trim().min(1, "errors.users.zod.name").max(100),
  username: z.string().trim().min(3, "errors.users.zod.username").max(50),
  password: z.string({ required_error: "errors.users.zod.passwordRequired" }).min(8, "errors.users.zod.passwordMin"),
  role: z.nativeEnum(UserRole, { errorMap: () => ({ message: "errors.users.zod.role" }) }),
  status: z.boolean().refine((val) => val === true, {
    message: "errors.users.zod.status"
  })
});
const shopSchema = z.object({
  code: z.string().min(1, "errors.shop.zod.code"),
  name: z.string().min(1, "errors.shop.zod.name"),
  address: z.string().min(1, "errors.shop.zod.address"),
  status: z.coerce.boolean({
    required_error: "errors.shop.zod.status"
  }),
  phone: z.string().optional(),
  vat: z.string().optional(),
  createdAt: z.string().datetime().optional()
});
const productSchema = z.object({
  name: z.string().min(1, "errors.product.zod.name"),
  code: z.string().min(1, "errors.product.zod.code"),
  measurement: z.nativeEnum(ProductMeasurement, {
    errorMap: () => ({ message: "errors.product.zod.measurement" })
  }),
  categoryId: z.string().nonempty("errors.product.zod.category"),
  price: z.number({
    required_error: "errors.product.zod.price",
    invalid_type_error: "errors.product.zod.priceType"
  }).positive("errors.product.zod.positivePrice")
});

export { UserRole as U, productSchema as p, shopSchema as s, userSchema as u };
//# sourceMappingURL=zodValidation-CrWiySST.js.map
