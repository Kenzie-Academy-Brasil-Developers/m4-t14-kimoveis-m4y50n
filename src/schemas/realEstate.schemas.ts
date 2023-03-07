import { z } from "zod";

const realEstateSchema = z.object({
	id: z.number(),
	sold: z.boolean().default(false),
	value: z.number().min(1),
	size: z.number(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

const realEstateCreateSchema = realEstateSchema.omit({ id: true });

export { realEstateSchema, realEstateCreateSchema };
