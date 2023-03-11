import { AppDataSource } from "../../data-source";
import { Category, RealEstate } from "../../entities";
import { iAddresses } from "../../interfaces/addresses.interfaces";
import { iCategoryRepo } from "../../interfaces/categories.interfaces";
import {
	iRealEstate,
	iRealEstateAddress,
	iRealEstateRepo,
} from "../../interfaces/realEstate.interfaces";
import createAddressesService from "../addresses/createAddresses.service";

const createRealEstateService = async (payload: any): Promise<any> => {
	const realEstateRepo: iRealEstateRepo =
			AppDataSource.getRepository(RealEstate),
		categoryRepo: iCategoryRepo = AppDataSource.getRepository(Category);

	const { address: addressData, ...realEstateData } = payload;

	//create address and retrive addressId
	const address: iAddresses = await createAddressesService(addressData);

	const category = await categoryRepo.findOne({
		where: {
			id: realEstateData.categoryId,
		},
	});

	const realEstateValidateData: iRealEstate = {
		...realEstateData,
		address: address,
		category: category,
	};

	const realEstate = realEstateRepo.create(realEstateValidateData);

	await realEstateRepo.save(realEstate);

	return realEstate;
};

export default createRealEstateService;
