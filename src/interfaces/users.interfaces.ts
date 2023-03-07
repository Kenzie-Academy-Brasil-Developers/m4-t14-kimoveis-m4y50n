import { DeepPartial, InsertResult, Repository } from "typeorm";
import { z } from "zod";
import { User } from "../entities";
import { usersSchema, usersCreateSchema } from "../schemas/users.schemas";

type iUsers = z.infer<typeof usersSchema>;
type iUsersCreate = z.infer<typeof usersCreateSchema>;
type iUsersRepo = Repository<User>;
type iUsersPartial = DeepPartial<User>;

export { iUsers, iUsersCreate, iUsersRepo, iUsersPartial };
