import { registerUser } from "./user.controller";

const {Router} from "express";
 export const userRoute = Router();
userRoute.post("/", registerUser)