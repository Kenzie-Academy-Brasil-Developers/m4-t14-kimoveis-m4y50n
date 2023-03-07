import { Request, Response } from "express";
import { iUsersCreate } from "../interfaces/users.interfaces";
import createUsersService from "../services/users/createUsers.service";
import getAllUsersService from "../services/users/getAllUsers.service";

const getAllUsersController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const allUsers = await getAllUsersService();

	return res.status(200).json(allUsers);
};

const createUsersController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const payload: any = req.body;

	const userData: iUsersCreate = await createUsersService(payload);

	return res.status(201).json(userData);
};

const updateUsersController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	return res.status(200).json({ message: "users patch" });
};

const deleteUsersController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	return res.status(204).json({ message: "users delete" });
};

export {
	getAllUsersController,
	createUsersController,
	updateUsersController,
	deleteUsersController,
};
