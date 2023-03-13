import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";
import {
	iCategory,
	iCategoryCreate,
	iCategoryRepo,
} from "../../interfaces/categories.interfaces";

const createCategoriesService = async (
	payload: iCategoryCreate
): Promise<iCategory> => {
	const categoryRepo: iCategoryRepo = AppDataSource.getRepository(Category);

	const categoryExists = await categoryRepo.findOne({
		where: { name: payload.name },
	});

	if (categoryExists) {
		throw new AppError("Category already exists", 409);
	}

	// const category = await categoryRepo
	// 	.createQueryBuilder()
	// 	.insert()
	// 	.into(Category)
	// 	.values([payload])
	// 	.returning("*")
	// 	.execute();

	const category: Category = categoryRepo.create(payload);

	await categoryRepo.save(category);

	return category;
};

export default createCategoriesService;
