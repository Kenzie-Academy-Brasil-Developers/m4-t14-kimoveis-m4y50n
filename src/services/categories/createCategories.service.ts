import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";
import {
	iCategory,
	iCategoryRepo,
} from "../../interfaces/categories.interfaces";

const createCategoriesService = async (payload: any): Promise<iCategory> => {
	const categoryRepo: iCategoryRepo = AppDataSource.getRepository(Category);

	const categoryExists = await categoryRepo.findOne({
		where: { name: payload.name },
	});

	if (categoryExists) {
		throw new AppError("Category already exists", 409);
	}

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
