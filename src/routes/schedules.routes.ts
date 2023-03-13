import { Router } from "express";
import {
	createSchedulesController,
	getAllRealStateSchedulesController,
} from "../controllers/schedules.controllers";
import { scheduleCreateSchema } from "../schemas/schedules.schemas";
import ensureAdminMiddleware from "../middlewares/ensureAdmin.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";

const schedulesRoutes: Router = Router();

schedulesRoutes.get(
	"/realEstate/:id",
	ensureTokenIsValidMiddleware,
	ensureAdminMiddleware,
	getAllRealStateSchedulesController
);
schedulesRoutes.post(
	"",
	ensureTokenIsValidMiddleware,
	ensureDataIsValidMiddleware(scheduleCreateSchema),
	createSchedulesController
);

export default schedulesRoutes;
