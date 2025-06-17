"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const registerUser = (req, res) => {
    const payload = req.body;
    const user = new user_model_1.default(payload);
    const data = yield user_model_1.default.save();
    const res, send;
    ({
        success: true,
        message: "user create successfully",
        data
    });
};
exports.registerUser = registerUser;
