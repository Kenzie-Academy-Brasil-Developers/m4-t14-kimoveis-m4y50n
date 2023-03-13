import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUsersRepo } from "../../interfaces/users.interfaces";

const deleteUsersService = async (userId: number): Promise<void> => {
	const usersRepo: iUsersRepo = AppDataSource.getRepository(User);

	await usersRepo
		.createQueryBuilder()
		.softDelete()
		.where("id = :id", { id: userId })
		.execute();
};

export default deleteUsersService;
