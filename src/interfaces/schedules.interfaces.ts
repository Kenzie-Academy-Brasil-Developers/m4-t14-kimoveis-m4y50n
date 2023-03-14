import { Repository } from "typeorm";
import { z } from "zod";
import { Schedule } from "../entities";
import { realEstateSchedules } from "../schemas/realEstate.schemas";
import {
	scheduleCreateSchema,
	scheduleSchema,
} from "../schemas/schedules.schemas";

type iSchedules = z.infer<typeof scheduleSchema>;
type iSchedulesCreate = z.infer<typeof scheduleCreateSchema>;
type iSchedulesRepo = Repository<Schedule>;
type iRealEstateSchedule = z.infer<typeof realEstateSchedules>;

export { iSchedules, iSchedulesCreate, iSchedulesRepo, iRealEstateSchedule };
