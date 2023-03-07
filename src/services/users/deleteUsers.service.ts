import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
	iUsers,
	iUsersPartial,
	iUsersRepo,
} from "../../interfaces/users.interfaces";

const deleteUsersService = async (userId: number): Promise<void> => {
	const usersRepo: iUsersRepo = AppDataSource.getRepository(User);

	const dateNow: Date = new Date(Date.now());

	const userData: iUsers | null = await usersRepo.findOneBy({ id: userId });

	const deletedData: iUsersPartial = {
		...userData,
		deletedAt: dateNow,
	};

	await usersRepo
		.createQueryBuilder()
		.update(User)
		.set(deletedData)
		.where("id = :id", { id: userId })
		.execute();
};

export default deleteUsersService;
