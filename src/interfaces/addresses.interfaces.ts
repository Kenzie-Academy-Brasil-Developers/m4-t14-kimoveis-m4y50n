import { Repository } from "typeorm";
import { z } from "zod";
import { Address } from "../entities";
import {
	addressesCreateSchema,
	addressesSchema,
} from "../schemas/addresses.schemas";

type iAddresses = z.infer<typeof addressesSchema>;
type iAddressesCreate = z.infer<typeof addressesCreateSchema>;
type iAddressesRepo = Repository<Address>;

export { iAddresses, iAddressesCreate, iAddressesRepo };
