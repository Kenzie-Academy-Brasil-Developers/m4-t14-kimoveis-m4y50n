import { AppDataSource } from "../../data-source";
import { Address } from "../../entities";
import { AppError } from "../../errors";
import {
	iAddresses,
	iAddressesCreate,
	iAddressesRepo,
} from "../../interfaces/addresses.interfaces";

const createAddressesService = async (
	addressData: iAddressesCreate
): Promise<iAddresses> => {
	const addressRepo: iAddressesRepo = AppDataSource.getRepository(Address);

	const addressExists = await addressRepo
		.createQueryBuilder()
		.where("street = :street", { street: addressData.street })
		.andWhere("number = :number", { number: addressData.number })
		.andWhere('"zipCode" = :zipCode', { zipCode: addressData.zipCode })
		.andWhere("city = :city", { city: addressData.city })
		.andWhere("state = :state", { state: addressData.state })
		.getOne();

	if (addressExists) {
		throw new AppError("Address already exists", 409);
	}

	const address: Address = addressRepo.create(addressData as Address);

	await addressRepo.save(address);

	return address;
};

export default createAddressesService;
