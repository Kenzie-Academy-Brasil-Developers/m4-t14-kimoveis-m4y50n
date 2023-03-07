import { AppDataSource } from "../../data-source";
import { Address } from "../../entities";
import {
	iAddresses,
	iAddressesRepo,
} from "../../interfaces/addresses.interfaces";

const createAddressesService = async (
	addressData: any
): Promise<iAddresses> => {
	const addressRepo: iAddressesRepo = AppDataSource.getRepository(Address);

	const address = await addressRepo
		.createQueryBuilder()
		.insert()
		.into(Address)
		.values([addressData])
		.returning("*")
		.execute();

	return address.raw[0];
};

export default createAddressesService;
