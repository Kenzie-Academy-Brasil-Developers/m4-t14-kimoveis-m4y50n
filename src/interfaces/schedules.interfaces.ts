import { Repository } from "typeorm";
import { z } from "zod";
import { Schedule } from "../entities";
import {
	scheduleCreateSchema,
	scheduleSchema,
} from "../schemas/schedules.schemas";

type iSchedules = z.infer<typeof scheduleSchema>;
type iSchedulesCreate = z.infer<typeof scheduleCreateSchema>;
type iSchedulesRepo = Repository<Schedule>;

export { iSchedules, iSchedulesCreate, iSchedulesRepo };
