import { Router } from "express";
import { createMango, getmangos } from "./mango.controller";
export const mangoRoute = Router();
mangoRoute.post("/", createMango);
mangoRoute.get("/", getmangos)