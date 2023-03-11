import { Repository } from "typeorm";
import { z } from "zod";
import { Schedule } from "../entities";
import {
	scheduleCreateSchema,
	scheduleRealEstateSchema,
	scheduleSchema,
} from "../schemas/schedules.schemas";

type iSchedules = z.infer<typeof scheduleSchema>;
type iSchedulesCreate = z.infer<typeof scheduleCreateSchema>;
type iSchedulesRepo = Repository<Schedule>;
type iSchedulesRealEstate = z.infer<typeof scheduleRealEstateSchema>;

export { iSchedules, iSchedulesCreate, iSchedulesRepo, iSchedulesRealEstate };
