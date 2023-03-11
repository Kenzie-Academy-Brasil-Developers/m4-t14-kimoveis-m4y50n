import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import {
	iRealEstateAddress,
	iRealEstateRepo,
} from "../../interfaces/realEstate.interfaces";

const getAllRealEstateService = async (): Promise<iRealEstateAddress[]> => {
	const realEstateRepo: iRealEstateRepo = await AppDataSource.getRepository(
		RealEstate
	);

	const realEstate: any = realEstateRepo.find({
		relations: {
			address: true,
		},
	});

	const resRealEstate: iRealEstateAddress[] = realEstate;

	return resRealEstate;
};

export default getAllRealEstateService;
