import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

const PORT: number = Number(process.env.PORT);
const MONGO_URI: string = String(process.env.MONGO_URI);

import { connectDB } from "./db/connect";
import studentRoutes from "./routes/studentsRoutes";

app.use(express.json());

app.get("/api/v1/", (req: Request, res: Response) => {
  res.send("Hello World from Express with TypeScript");
});

app.use("/api/v1/student", studentRoutes);

app.listen(PORT, async () => {
  try {
    await connectDB(MONGO_URI);
    console.log(`Server is listening on port ${PORT}`);
  } catch (error) {
    console.error("Connection failed!");
  }
});
