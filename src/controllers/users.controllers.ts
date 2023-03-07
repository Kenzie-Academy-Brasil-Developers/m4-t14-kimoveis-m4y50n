import { Request, Response } from "express";
import { iUsers, iUsersCreate } from "../interfaces/users.interfaces";
import createUsersService from "../services/users/createUsers.service";
import deleteUsersService from "../services/users/deleteUsers.service";
import getAllUsersService from "../services/users/getAllUsers.service";
import updateUsersService from "../services/users/updateUsers.service";

const getAllUsersController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const allUsers: iUsers[] = await getAllUsersService();

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
	const payload: any = req.body,
		userId: number = parseInt(req.params.id);

	const updatedData: iUsersCreate = await updateUsersService(payload, userId);

	return res.status(200).json(updatedData);
};

const deleteUsersController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId: number = parseInt(req.params.id);

	await deleteUsersService(userId);

	return res.status(204).send();
};

export {
	getAllUsersController,
	createUsersController,
	updateUsersController,
	deleteUsersController,
};
