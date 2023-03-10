import { z } from "zod";
import { loginSchema } from "../schemas/login.schemas";

type iLoginRequest = z.infer<typeof loginSchema>;

export { iLoginRequest };
