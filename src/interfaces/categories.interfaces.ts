import { Repository } from "typeorm";
import { z } from "zod";
import { Category } from "../entities";
import {
	categoriesSchema,
	createCategoriesSchema,
	realEstateByCategorySchema,
} from "../schemas/categories.schemas";

type iCategory = z.infer<typeof categoriesSchema>;
type iCategoryCreate = z.infer<typeof createCategoriesSchema>;
type iCategoryRepo = Repository<Category>;
type iCategoryRealEstate = z.infer<typeof realEstateByCategorySchema>;

export { iCategory, iCategoryRepo, iCategoryCreate, iCategoryRealEstate };
