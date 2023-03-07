import { z } from "zod";

const usersSchema = z.object({
	id: z.number(),
	name: z.string().min(3).max(45),
	email: z.string().max(45),
	admin: z.boolean().default(false),
	password: z.string().min(8).max(120),
	createdAt: z.date(),
	updatedAt: z.date(),
	deletedAt: z.date().nullish(),
});

const usersCreateSchema = usersSchema.omit({ id: true });

const usersUpdateSchema = usersCreateSchema.partial();

export { usersSchema, usersCreateSchema, usersUpdateSchema };
