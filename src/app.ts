import "express-async-errors";
import express, { Application, json } from "express";
import { handleError } from "./errors";

const app: Application = express();
app.use(json());

// app.use("/");

app.use(handleError);

export default app;
