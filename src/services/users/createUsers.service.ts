import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import {
	iUsersCreate,
	iUsersRepo,
	iUsersWithOutPass,
} from "../../interfaces/users.interfaces";
import { usersWithoutPassSchema } from "../../schemas/users.schemas";

const createUsersService = async (
	payload: iUsersCreate
): Promise<iUsersWithOutPass> => {
	const usersRepo: iUsersRepo = AppDataSource.getRepository(User);

	const checkEmail = await usersRepo
		.createQueryBuilder()
		.select()
		.where("email = :email", { email: payload.email })
		.getOne();

	if (checkEmail) {
		throw new AppError("Email already exists", 409);
	}

	const user: User = usersRepo.create(payload);

	await usersRepo.save(user);

	const resUser = usersWithoutPassSchema.parse(user);

	return resUser;
};

export default createUsersService;
