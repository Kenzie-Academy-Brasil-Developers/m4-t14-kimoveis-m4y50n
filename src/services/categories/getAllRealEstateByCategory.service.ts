import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import {
	iRealEstate,
	iRealEstateRepo,
} from "../../interfaces/realEstate.interfaces";

const getAllRealEstateByCategoryService = async (
	categoryId: number
): Promise<iRealEstate[]> => {
	const realEstateRepo: iRealEstateRepo =
		AppDataSource.getRepository(RealEstate);

	const realEstateByCategory = await realEstateRepo.find({
		relations: {
			category: true,
			address: true,
		},
		where: {
			category: {
				id: categoryId,
			},
		},
	});

	return realEstateByCategory;
};

export default getAllRealEstateByCategoryService;
