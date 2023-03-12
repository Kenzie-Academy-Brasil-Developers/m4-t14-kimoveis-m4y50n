import { Router } from "express";
import {
	createUsersController,
	deleteUsersController,
	getAllUsersController,
	updateUsersController,
} from "../controllers/users.controllers";
import ensureAdminMiddleware from "../middlewares/ensureAdmin.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
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
	ensureTokenIsValidMiddleware,
	ensureAdminMiddleware,
	updateUsersController
);
usersRoutes.delete(
	"/:id",
	ensureTokenIsValidMiddleware,
	ensureAdminMiddleware,
	deleteUsersController
);

export default usersRoutes;
