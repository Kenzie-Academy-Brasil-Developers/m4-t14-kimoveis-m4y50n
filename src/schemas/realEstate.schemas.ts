import { z } from "zod";
import { addressesSchema } from "./addresses.schemas";
import { categoriesSchema } from "./categories.schemas";

const realEstateSchema = z.object({
	id: z.number(),
	sold: z.boolean().default(false),
	value: z.union([z.number().min(1), z.string()]),
	size: z.number(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

const realEstateCreateSchema = realEstateSchema.omit({ id: true });

const realEstateAddressSchema = realEstateSchema.extend({
	address: addressesSchema,
});

export { realEstateSchema, realEstateCreateSchema, realEstateAddressSchema };
