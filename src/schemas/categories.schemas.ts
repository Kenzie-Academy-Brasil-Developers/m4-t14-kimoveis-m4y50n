import { z } from "zod";
import { realEstateSchema } from "./realEstate.schemas";

const categoriesSchema = z.object({
	id: z.number(),
	name: z.string().max(45),
});

const createCategoriesSchema = categoriesSchema.omit({ id: true });

const realEstateByCategorySchema = createCategoriesSchema.extend({
	realEstate: realEstateSchema,
});

export { categoriesSchema, createCategoriesSchema, realEstateByCategorySchema };
