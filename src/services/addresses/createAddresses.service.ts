import { AppDataSource } from "../../data-source";
import { Address } from "../../entities";
import { AppError } from "../../errors";
import {
	iAddresses,
	iAddressesRepo,
} from "../../interfaces/addresses.interfaces";

const createAddressesService = async (
	addressData: any
): Promise<iAddresses> => {
	const addressRepo: iAddressesRepo = AppDataSource.getRepository(Address);

	const addressExists = await addressRepo
		.createQueryBuilder()
		.where("street = :street", { street: addressData.street })
		.andWhere('"zipCode" = :zipCode', { zipCode: addressData.zipCode })
		.andWhere("number = :number", { number: addressData.number })
		.andWhere("city = :city", { city: addressData.city })
		.andWhere("state = :state", { state: addressData.state })
		.getOne();

	if (addressExists) {
		throw new AppError("Address already exists", 409);
	}

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
