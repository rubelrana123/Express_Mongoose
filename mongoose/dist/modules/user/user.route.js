"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const user_controller_1 = require("./user.controller");
const { Router }, from;
"express";
exports.userRoute = Router();
exports.userRoute.post("/", user_controller_1.registerUser);
