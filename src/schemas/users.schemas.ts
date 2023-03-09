import { hashSync } from "bcryptjs";
import { z } from "zod";

const usersSchema = z.object({
	id: z.number(),
	name: z.string().min(3).max(45),
	email: z.string().max(45),
	admin: z.boolean().default(false),
	password: z
		.string()
		.min(8)
		.max(120)
		.transform((pass) => {
			return hashSync(pass, 7);
		}),
	createdAt: z.date(),
	updatedAt: z.date(),
	deletedAt: z.date().nullish(),
});

const usersWithoutPassSchema = usersSchema.omit({ password: true });

const usersCreateSchema = usersSchema.omit({ id: true });

const usersUpdateSchema = usersCreateSchema.partial();

export {
	usersSchema,
	usersWithoutPassSchema,
	usersCreateSchema,
	usersUpdateSchema,
};
