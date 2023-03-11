import { Repository } from "typeorm";
import { z } from "zod";
import { RealEstate } from "../entities";
import {
	realEstateAddressSchema,
	realEstateCreateSchema,
	realEstateSchema,
} from "../schemas/realEstate.schemas";

type iRealEstate = z.infer<typeof realEstateSchema>;
type iRealEstateCreate = z.infer<typeof realEstateCreateSchema>;
type iRealEstateRepo = Repository<RealEstate>;
type iRealEstateAddress = z.infer<typeof realEstateAddressSchema>;

export { iRealEstate, iRealEstateCreate, iRealEstateRepo, iRealEstateAddress };
