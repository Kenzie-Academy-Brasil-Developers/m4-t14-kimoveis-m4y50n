import { AppDataSource } from "../../data-source";
import { Schedule } from "../../entities";
import {
	iSchedules,
	iSchedulesRepo,
} from "../../interfaces/schedules.interfaces";

const createSchedulesService = async (payload: any): Promise<any> => {
	const schedulesRepo: iSchedulesRepo = AppDataSource.getRepository(Schedule);

	const schedule = await schedulesRepo
		.createQueryBuilder()
		.insert()
		.into(Schedule)
		.values([payload])
		.returning("*")
		.execute();

	return schedule;
};

export default createSchedulesService;
