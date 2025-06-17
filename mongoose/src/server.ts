import express, { Application, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import { userRoute } from "./modules/user/user.route";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use(userRoute)

// Sample route (optional)
app.get("/", (req: Request, res: Response) => {
  res.send("Server is up and running!");
});

// Server and DB Connection
const startServer = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("✅ Connected to MongoDB");

    app.listen(config.port, () => {
      console.log(`🚀 Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to the database", error);
  }
};

startServer();
