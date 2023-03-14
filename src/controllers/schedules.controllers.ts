import { Request, Response } from "express";
import {
	iRealEstateSchedule,
	iSchedulesCreate,
} from "../interfaces/schedules.interfaces";
import createSchedulesService from "../services/schedules/createSchedules.service";
import allRealEstateSchedulesService from "../services/schedules/getAllRealEstateSchedules.service";

const getAllRealStateSchedulesController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const realEstateId: number = parseInt(req.params.id);

	const allRealStateSchedules: iRealEstateSchedule =
		await allRealEstateSchedulesService(realEstateId);

	return res.status(200).json(allRealStateSchedules);
};

const createSchedulesController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const scheduleData: iSchedulesCreate = req.body,
		userId: number = Number(req.user.id);

	const createSchedule = await createSchedulesService(scheduleData, userId);

	return res.status(201).json({ message: createSchedule });
};

export { getAllRealStateSchedulesController, createSchedulesController };
