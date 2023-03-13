import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";
import { iUsersRepo } from "../interfaces/users.interfaces";

const ensureUserExistsMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const userId = parseInt(req.params.id);

	const usersRepo: iUsersRepo = AppDataSource.getRepository(User);

	const user = await usersRepo.findOne({
		where: { id: userId },
		withDeleted: true,
	});

	if (!user || user?.deletedAt) {
		throw new AppError("User not found", 404);
	}

	return next();
};

export default ensureUserExistsMiddleware;
