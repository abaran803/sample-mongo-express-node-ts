import express, { Express } from "express";
import connectDB from "./config/db";

const app: Express = express();

connectDB();

import { lists } from "./features/lists";

app.use(express.json());

app.use("/lists", lists);

export default app;