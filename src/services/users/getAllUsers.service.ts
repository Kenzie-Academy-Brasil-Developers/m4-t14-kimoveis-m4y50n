import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUsers, iUsersRepo } from "../../interfaces/users.interfaces";

const getAllUsersService = async (): Promise<iUsers[]> => {
	const usersRepo: iUsersRepo = AppDataSource.getRepository(User);

	const users: iUsers[] = await usersRepo.find();

	return users;
};

export default getAllUsersService;
