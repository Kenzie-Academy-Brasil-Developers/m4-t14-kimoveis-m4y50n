import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
	iUsers,
	iUsersPartial,
	iUsersRepo,
} from "../../interfaces/users.interfaces";

const updateUsersService = async (
	payload: any,
	userId: number
): Promise<iUsers> => {
	const usersRepo: iUsersRepo = AppDataSource.getRepository(User);

	const dateNow: Date = new Date(Date.now());

	const validateData: iUsersPartial = {
		...payload,
		updatedAt: dateNow,
	};

	const userData = await usersRepo
		.createQueryBuilder()
		.update(User)
		.set(validateData)
		.where("id = :id", { id: userId })
		.returning("*")
		.execute();

	return userData.raw[0];
};

export default updateUsersService;
