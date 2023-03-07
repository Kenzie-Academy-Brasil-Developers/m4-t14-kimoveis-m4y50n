import { Router } from "express";
import {
	createUsersController,
	deleteUsersController,
	getAllUsersController,
	updateUsersController,
} from "../controllers/users.controllers";

const usersRoutes: Router = Router();

usersRoutes.get("", getAllUsersController);
usersRoutes.post("", createUsersController);
usersRoutes.patch("/:id", updateUsersController);
usersRoutes.delete("/:id", deleteUsersController);

export default usersRoutes;
