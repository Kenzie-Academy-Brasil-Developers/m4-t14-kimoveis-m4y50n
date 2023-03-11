import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { iAddresses } from "../../interfaces/addresses.interfaces";
import {
	iRealEstate,
	iRealEstateAddress,
	iRealEstateRepo,
} from "../../interfaces/realEstate.interfaces";
import createAddressesService from "../addresses/createAddresses.service";

const createRealEstateService = async (
	payload: any
): Promise<iRealEstateAddress> => {
	const realEstateRepo: iRealEstateRepo =
		AppDataSource.getRepository(RealEstate);

	const { address: addressData, ...realEstateData } = payload;

	const dateNow: Date = new Date(Date.now());

	//create address and retrive addressId
	const address: iAddresses = await createAddressesService(addressData);

	const realEstateValidateData: iRealEstate = {
		...realEstateData,
		address: address.id,
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

	const realEstateAddress: iRealEstateAddress = {
		...realEstate.raw[0],
		address: addressData,
	};

	return realEstateAddress;
};

export default createRealEstateService;
