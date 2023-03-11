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

export { scheduleSchema, scheduleCreateSchema };
