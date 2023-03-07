import { Repository } from "typeorm";
import { z } from "zod";
import { Category } from "../entities";
import {
	categoriesSchema,
	createCategoriesSchema,
} from "../schemas/categories.schemas";

type iCategory = z.infer<typeof categoriesSchema>;
type iCategoryCreate = z.infer<typeof createCategoriesSchema>;
type iCategoryRepo = Repository<Category>;

export { iCategory, iCategoryRepo, iCategoryCreate };
