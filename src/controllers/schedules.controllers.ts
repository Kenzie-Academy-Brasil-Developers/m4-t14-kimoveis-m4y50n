import { Request, Response } from "express";
import { Schedule } from "../entities";
import { iSchedulesCreate } from "../interfaces/schedules.interfaces";
import createSchedulesService from "../services/schedules/createSchedules.service";
import allRealEstateSchedulesService from "../services/schedules/getAllRealEstateSchedules.service";

const getAllRealStateSchedulesController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const realEstateId: number = parseInt(req.params.id);

	const allRealStateSchedules = await allRealEstateSchedulesService(
		realEstateId
	);

	return res.status(200).json(allRealStateSchedules);
};

const createSchedulesController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const scheduleData: iSchedulesCreate = req.body;

	const createSchedule = await createSchedulesService(scheduleData);

	return res.status(201).json(createSchedule);
};

export { getAllRealStateSchedulesController, createSchedulesController };
