import "express-async-errors";
import express, { Application, json } from "express";
import { handleError } from "./errors";
import loginRoutes from "./routes/login.routes";
import usersRoutes from "./routes/users.routes";
import categoriesRoutes from "./routes/categories.routes";
import realEstateRoutes from "./routes/realEstate.routes";
import schedulesRoutes from "./routes/schedules.routes";

const app: Application = express();
app.use(json());

app.use("/login", loginRoutes);

app.use("/users", usersRoutes);

app.use("/categories", categoriesRoutes);

app.use("/realestate", realEstateRoutes);

app.use("/schedules", schedulesRoutes);

app.use(handleError);

export default app;
