import { Request, Response } from "express";
import { RealEstate } from "../entities";
import {
	iRealEstateAddress,
	iRealEstateCreate,
} from "../interfaces/realEstate.interfaces";
import createRealEstateService from "../services/realEstate/createRealEstate.service";
import getAllRealEstateService from "../services/realEstate/getAllRealEstate.service";

const getAllRealEstateController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const allRealEstate: iRealEstateAddress[] = await getAllRealEstateService();

	return res.status(200).json(allRealEstate);
};

const createRealEstateController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const payload: iRealEstateCreate = req.body;

	const realEstate: RealEstate[] = await createRealEstateService(payload);

	return res.status(201).json(realEstate);
};

export { createRealEstateController, getAllRealEstateController };
