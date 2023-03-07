import { AppDataSource } from "../../data-source";
import { Address, RealEstate } from "../../entities";
import { iAddressesRepo } from "../../interfaces/addresses.interfaces";
import {
	iRealEstate,
	iRealEstateRepo,
} from "../../interfaces/realEstate.interfaces";
import createAddressesService from "../addresses/createAddresses.service";

const createRealEstateService = async (payload: any): Promise<iRealEstate> => {
	const realEstateRepo: iRealEstateRepo =
		AppDataSource.getRepository(RealEstate);

	const { address: addressData, ...realEstateData } = payload;

	const dateNow: Date = new Date(Date.now());

	//create address and retrive addressId
	const addressId = await createAddressesService(addressData);

	const realEstateValidateData: any = {
		...realEstateData,
		address: addressId.id,
		createdAt: dateNow,
		updatedAt: dateNow,
	};

	const realEstate = await realEstateRepo
		.createQueryBuilder()
		.insert()
		.into(RealEstate)
		.values([realEstateValidateData])
		.returning([
			"id",
			"sold",
			"value",
			"size",
			"createdAt",
			"updatedAt",
			"category",
		])
		.execute();

	const realEstateAddress = {
		...realEstate.raw[0],
		address: addressData,
	};

	return realEstateAddress;
};

export default createRealEstateService;
