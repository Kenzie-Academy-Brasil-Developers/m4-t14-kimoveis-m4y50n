import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
	iUsers,
	iUsersRepo,
	iUsersWithOutPass,
} from "../../interfaces/users.interfaces";
import { usersWithoutPassSchema } from "../../schemas/users.schemas";

const getAllUsersService = async (): Promise<iUsersWithOutPass[]> => {
	const usersRepo: iUsersRepo = AppDataSource.getRepository(User);

	const users: iUsers[] = await usersRepo.find();

	const allUsersWithOutPass = usersWithoutPassSchema.array().parse(users);

	return allUsersWithOutPass;
};

export default getAllUsersService;
