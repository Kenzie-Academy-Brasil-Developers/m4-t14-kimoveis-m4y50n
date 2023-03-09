import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import {
	iRealEstate,
	iRealEstateRepo,
} from "../../interfaces/realEstate.interfaces";

const getAllRealEstateService = async (): Promise<iRealEstate[]> => {
	const realEstateRepo: iRealEstateRepo =
		AppDataSource.getRepository(RealEstate);

	const realEstate = await realEstateRepo.find({
		relations: {
			category: true,
			address: true,
		},
	});

	return realEstate;
};

export default getAllRealEstateService;
