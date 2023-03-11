import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUsersRepo } from "../../interfaces/users.interfaces";
import { usersWithoutPassSchema } from "../../schemas/users.schemas";

const updateUsersService = async (
	payload: any,
	userId: number
): Promise<any> => {
	const usersRepo: iUsersRepo = AppDataSource.getRepository(User);

	await usersRepo.update(
		{
			id: userId,
		},
		{
			...payload,
		}
	);

	const updatedUser = await usersRepo.findOneBy({ id: userId });

	return usersWithoutPassSchema.parse(updatedUser);
};

export default updateUsersService;
