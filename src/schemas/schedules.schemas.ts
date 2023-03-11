import { z } from "zod";
import { realEstateSchema } from "./realEstate.schemas";
import { usersSchema } from "./users.schemas";

const scheduleSchema = z.object({
	id: z.number(),
	date: z.string(),
	hour: z.string(),
	realEstateId: z.number(),
	userId: z.number(),
});

const scheduleCreateSchema = scheduleSchema.omit({ id: true });

const scheduleRealEstateSchema = scheduleSchema.extend({
	realEstateId: z.number().nullish(),
	userId: z.number().nullish(),
	user: usersSchema,
	realEstate: realEstateSchema,
});

export { scheduleSchema, scheduleCreateSchema, scheduleRealEstateSchema };
