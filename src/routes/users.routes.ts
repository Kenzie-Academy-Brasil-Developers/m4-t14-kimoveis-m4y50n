import { Router } from "express";
import {
	createUsersController,
	deleteUsersController,
	getAllUsersController,
	updateUsersController,
} from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { usersCreateSchema, usersUpdateSchema } from "../schemas/users.schemas";

const usersRoutes: Router = Router();

usersRoutes.get("", getAllUsersController);
usersRoutes.post(
	"",
	ensureDataIsValidMiddleware(usersCreateSchema),
	createUsersController
);
usersRoutes.patch(
	"/:id",
	ensureDataIsValidMiddleware(usersUpdateSchema),
	updateUsersController
);
usersRoutes.delete("/:id", deleteUsersController);

export default usersRoutes;
