import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { iLoginRequest } from "../../interfaces/login.interfaces";
import { iUsersRepo } from "../../interfaces/users.interfaces";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginService = async (loginDate: iLoginRequest): Promise<string> => {
	const usersRepo: iUsersRepo = await AppDataSource.getRepository(User);

	const user = await usersRepo.find({
		where: {
			email: loginDate.email,
		},
	});

	if (!user.length) {
		throw new AppError("Wrong email or password", 401);
	}

	const matchPass: boolean = await compare(
		loginDate.password,
		user[0].password
	);

	if (!matchPass) {
		throw new AppError("Wrong email or password", 401);
	}

	const token: string = jwt.sign(
		{ admin: user[0].admin },
		process.env.SECRET_KEY!,
		{
			expiresIn: "72h",
			subject: user[0].id.toString(),
		}
	);

	return token;
};

export default loginService;
