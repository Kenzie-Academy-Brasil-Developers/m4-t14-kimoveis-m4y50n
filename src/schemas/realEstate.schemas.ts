import { z } from "zod";
import { addressesCreateSchema } from "./addresses.schemas";

const realEstateSchema = z.object({
	id: z.number(),
	sold: z.boolean().default(false),
	value: z.union([z.number().min(1), z.string()]),
	size: z.number(),
	createdAt: z.string(),
	updatedAt: z.string(),
});

const realEstateAddressSchema = realEstateSchema.extend({
	address: addressesCreateSchema,
	categoryId: z.number(),
});

const realEstateCreateSchema = realEstateAddressSchema.omit({
	id: true,
	createdAt: true,
	updatedAt: true,
});

export { realEstateSchema, realEstateCreateSchema, realEstateAddressSchema };
