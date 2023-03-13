import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUsersRepo } from "../../interfaces/users.interfaces";
import { usersUpdateSchema } from "../../schemas/users.schemas";

const updateUsersService = async (
	payload: any,
	userId: number
): Promise<any> => {
	const usersRepo: iUsersRepo = AppDataSource.getRepository(User);

	const user = await usersRepo.findOneBy({ id: userId });

	console.log(payload);

	if (!user?.admin) {
		payload.admin = false;
	}

	await usersRepo.update(
		{
			id: userId,
		},
		{
			...payload,
		}
	);

	const updatedUser = await usersRepo.findOneBy({ id: userId });

	return usersUpdateSchema.parse(updatedUser);
};

export default updateUsersService;
