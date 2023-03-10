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

	const userData = await usersRepo
		.createQueryBuilder()
		.update(User)
		.set(payload)
		.where("id = :id", { id: userId })
		.returning("*")
		.execute();

	return userData.raw[0];
};

export default updateUsersService;
