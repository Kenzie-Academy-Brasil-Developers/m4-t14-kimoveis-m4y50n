import { Request, Response } from "express";
import { iRealEstate } from "../interfaces/realEstate.interfaces";
import createRealEstateService from "../services/realEstate/createRealEstate.service";
import getAllRealEstateService from "../services/realEstate/getAllRealEstate.service";

const getAllRealEstateController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const allRealEstate: iRealEstate[] = await getAllRealEstateService();

	return res.status(200).json(allRealEstate);
};

const createRealEstateController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const payload: any = req.body;

	const realEstate: iRealEstate = await createRealEstateService(payload);

	return res.status(201).json(realEstate);
};

export { createRealEstateController, getAllRealEstateController };
