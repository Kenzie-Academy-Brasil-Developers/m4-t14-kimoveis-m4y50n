import "express-async-errors";
import express, { Application, json } from "express";
import { handleError } from "./errors";
import usersRoutes from "./routes/users.routes";
import categoriesRoutes from "./routes/categories.routes";
import realEstateRoutes from "./routes/realEstate.routes";

const app: Application = express();
app.use(json());

app.use("/users", usersRoutes);

app.use("/categories", categoriesRoutes);

app.use("/realestate", realEstateRoutes);

app.use(handleError);

export default app;
