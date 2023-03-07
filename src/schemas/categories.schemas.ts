import { z } from "zod";

const categoriesSchema = z.object({
	id: z.number(),
	name: z.string().max(45),
});

const createCategoriesSchema = categoriesSchema.omit({ id: true });

export { categoriesSchema, createCategoriesSchema };
