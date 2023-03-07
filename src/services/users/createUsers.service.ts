import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUsersRepo, iUsersResult } from "../../interfaces/users.interfaces";

const createUsersService = async (payload: any) => {
	const usersRepo: iUsersRepo = AppDataSource.getRepository(User);

	const dateNow: Date = new Date(Date.now());

	const validateData: User = {
		...payload,
		createdAt: dateNow,
		updatedAt: dateNow,
	};

	const userData: iUsersResult = await usersRepo
		.createQueryBuilder()
		.insert()
		.into(User)
		.values([validateData])
		.returning("*")
		.execute();

	return userData.raw[0];
};

export default createUsersService;
