import { AppDataSource } from "../../data-source";
import { Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { iAddresses } from "../../interfaces/addresses.interfaces";
import { iCategoryRepo } from "../../interfaces/categories.interfaces";
import {
	iRealEstateCreate,
	iRealEstateRepo,
} from "../../interfaces/realEstate.interfaces";
import { addressesCreateSchema } from "../../schemas/addresses.schemas";
import createAddressesService from "../addresses/createAddresses.service";

const createRealEstateService = async (
	payload: iRealEstateCreate
): Promise<RealEstate[]> => {
	const realEstateRepo: iRealEstateRepo =
			AppDataSource.getRepository(RealEstate),
		categoryRepo: iCategoryRepo = AppDataSource.getRepository(Category);

	const { address: addressData, ...realEstateData } = payload;

	//create address and retrive
	const address: iAddresses = await createAddressesService(
		addressesCreateSchema.parse(addressData)
	);

	const category = await categoryRepo.findOneBy({
		id: realEstateData.categoryId,
	});

	if (!category) {
		throw new AppError("Category not found", 404);
	}

	const realEstateValidateData: any = {
		...realEstateData,
		address: address,
		category: category,
	};

	const realEstate = realEstateRepo.create(realEstateValidateData);

	await realEstateRepo.save(realEstate);

	return realEstate;
};

export default createRealEstateService;
