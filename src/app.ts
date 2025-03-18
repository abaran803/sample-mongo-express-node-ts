import express, { Express } from "express";
import connectDB from "./config/db";

const app: Express = express();

connectDB();

import { lists } from "./features/lists";
import { users } from "./features/users";

app.use(express.json());

app.use("/lists", lists);
app.use("/users", users);

export default app;
