import { z } from "zod";
import { addressesCreateSchema, addressesSchema } from "./addresses.schemas";
import { scheduleSchema } from "./schedules.schemas";

const realEstateSchema = z.object({
	id: z.number(),
	sold: z.boolean().default(false),
	value: z.union([z.number().min(1), z.string()]),
	size: z.number().positive(),
	createdAt: z.string(),
	updatedAt: z.string(),
});

const realEstateAddressSchema = realEstateSchema.extend({
	address: addressesCreateSchema,
	categoryId: z.number(),
});

const realEstateSchedules = realEstateSchema.extend({
	schedule: scheduleSchema.array(),
	address: addressesSchema,
});

const realEstateCreateSchema = realEstateAddressSchema.omit({
	id: true,
	createdAt: true,
	updatedAt: true,
});

export {
	realEstateSchema,
	realEstateCreateSchema,
	realEstateSchedules,
	realEstateAddressSchema,
};
