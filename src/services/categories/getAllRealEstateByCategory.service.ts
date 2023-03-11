import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import {
	iRealEstateAddress,
	iRealEstateRepo,
} from "../../interfaces/realEstate.interfaces";

const getAllRealEstateByCategoryService = async (
	categoryId: number
): Promise<iRealEstateAddress[]> => {
	const realEstateRepo: iRealEstateRepo =
		AppDataSource.getRepository(RealEstate);

	const realEstateByCategory: any = await realEstateRepo.find({
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

	const resRealEstateByCategory: iRealEstateAddress[] = realEstateByCategory;

	return resRealEstateByCategory;
};

export default getAllRealEstateByCategoryService;
