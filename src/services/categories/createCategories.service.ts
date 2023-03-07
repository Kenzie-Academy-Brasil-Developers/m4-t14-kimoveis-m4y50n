import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import {
	iCategory,
	iCategoryRepo,
} from "../../interfaces/categories.interfaces";

const createCategoriesService = async (payload: any): Promise<iCategory> => {
	const categoryRepo: iCategoryRepo = AppDataSource.getRepository(Category);

	const category = await categoryRepo
		.createQueryBuilder()
		.insert()
		.into(Category)
		.values([payload])
		.returning("*")
		.execute();

	return category.raw[0];
};

export default createCategoriesService;
