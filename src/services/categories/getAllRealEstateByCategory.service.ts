import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";
import { iCategoryRepo } from "../../interfaces/categories.interfaces";

const getAllRealEstateByCategoryService = async (
	categoryId: number
): Promise<Category> => {
	const categoryRepo: iCategoryRepo = AppDataSource.getRepository(Category);

	const realEstateByCategory = await categoryRepo.find({
		relations: {
			realEstate: true,
		},
		where: {
			id: categoryId,
		},
	});

	if (!realEstateByCategory.length) {
		throw new AppError("Category not found", 404);
	}

	return realEstateByCategory[0];
};

export default getAllRealEstateByCategoryService;
