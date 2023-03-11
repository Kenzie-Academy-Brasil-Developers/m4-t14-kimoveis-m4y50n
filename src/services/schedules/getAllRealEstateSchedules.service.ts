import { AppDataSource } from "../../data-source";
import { Schedule } from "../../entities";
import { iSchedulesRealEstate } from "../../interfaces/schedules.interfaces";

const getAllRealEstateSchedulesService = async (
	realEstateId: number
): Promise<iSchedulesRealEstate[]> => {
	const schedulesRepo = await AppDataSource.getRepository(Schedule);

	const allRealStateSchedules: any = await schedulesRepo.find({
		relations: {
			user: true,
			realEstate: true,
		},
		where: {
			realEstate: {
				id: realEstateId,
			},
		},
	});

	const resAllRealStateSchedules: iSchedulesRealEstate[] =
		allRealStateSchedules;

	return resAllRealStateSchedules;
};

export default getAllRealEstateSchedulesService;
