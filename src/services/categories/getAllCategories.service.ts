import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import {
	iCategory,
	iCategoryRepo,
} from "../../interfaces/categories.interfaces";

const getAllCategoriesService = async (): Promise<iCategory[]> => {
	const categoryRepo: iCategoryRepo = AppDataSource.getRepository(Category);

	const categories = await categoryRepo.find();

	return categories;
};

export default getAllCategoriesService;
