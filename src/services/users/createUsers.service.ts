import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
	iUsersRepo,
	iUsersWithOutPass,
} from "../../interfaces/users.interfaces";
import { usersWithoutPassSchema } from "../../schemas/users.schemas";

const createUsersService = async (payload: any): Promise<iUsersWithOutPass> => {
	const usersRepo: iUsersRepo = AppDataSource.getRepository(User);

	const userData = await usersRepo
		.createQueryBuilder()
		.insert()
		.into(User)
		.values([payload])
		.returning("*")
		.execute();

	const userWithout = usersWithoutPassSchema.parse(userData.raw[0]);

	return userWithout;
};

export default createUsersService;
