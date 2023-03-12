import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const ensureAdminMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const admin = req.user.admin,
		userID = req.user.id;

	if (
		(req.method.toUpperCase() === "DELETE" ||
			req.method.toUpperCase() === "PATCH") &&
		userID === parseInt(req.params.id)
	) {
		return next();
	}

	if (!admin) {
		throw new AppError("Insufficient Permission", 401);
	}

	return next();
};

export default ensureAdminMiddleware;
