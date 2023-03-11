import { Router } from "express";
import {
	createSchedulesController,
	getAllRealStateSchedulesController,
} from "../controllers/schedules.controllers";

const schedulesRoutes: Router = Router();

schedulesRoutes.get("/realEstate/:id", getAllRealStateSchedulesController);
schedulesRoutes.post("", createSchedulesController);

export default schedulesRoutes;
