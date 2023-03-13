import { z } from "zod";

const usersSchema = z.object({
	id: z.number(),
	name: z.string().min(3).max(45),
	email: z.string().email().max(45),
	admin: z.boolean().default(false),
	password: z.string().min(4).max(120),
	createdAt: z.string(),
	updatedAt: z.string(),
	deletedAt: z.string().nullable(),
});

const usersWithoutPassSchema = usersSchema.omit({ password: true });

const usersCreateSchema = usersSchema.omit({
	id: true,
	createdAt: true,
	updatedAt: true,
	deletedAt: true,
});

const usersUpdateSchema = usersWithoutPassSchema.partial();

export {
	usersSchema,
	usersWithoutPassSchema,
	usersCreateSchema,
	usersUpdateSchema,
};
