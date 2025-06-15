"use strict";
/* // basic
import express, {  NextFunction, Request, Response } from 'express';
const path = require("path");
const fs = require("fs");
 export const todosRouter = express.Router();
const filePath = path.join(__dirname,"../../db/data.json")
console.log("filepath",filePath);
 
 
todosRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    const data = fs.readFileSync(filePath,{encoding : "utf-8"})
    console.log("hello data todos router"),
    res.send( {
        message : "from todosroute ",
        data
     
    })
 
    });

todosRouter.post('/create-todo', async (req: Request, res: Response) => {
    const {title, body} = req.body;
    console.log(title, body);
    res.send({message : "create todo successfuly"})
});

 todosRouter.put("/update-todo/:id", async (req: Request, res: Response) => {
    const {title, body} = req.body;
    console.log(title, body);
    res.send({message : "create todo successfuly"})
 })
 
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const mongodb_2 = require("../../config/mongodb");
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongodb_2.client.db("todosDB");
    const collection = yield db.collection("todos");
    const cursor = collection.find({});
    console.log("cursor--------------------------------------------", cursor);
    const todos = yield cursor.toArray();
    res.json(todos);
}));
exports.todosRouter.post('/create-todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, priority } = req.body;
    console.log("post", req.body);
    const db = yield mongodb_2.client.db("todosDB");
    const collection = yield db.collection("todos");
    yield collection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isCompleted: false
    });
    const cursor = collection.find({});
    const todos = yield cursor.toArray();
    res.json(todos);
}));
exports.todosRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongodb_2.client.db("todosDB");
    const collection = yield db.collection("todos");
    const todo = yield collection.findOne({ _id: new mongodb_1.ObjectId(id) });
    res.json(todo);
}));
exports.todosRouter.put("/update-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongodb_2.client.db("todosDB");
    const collection = yield db.collection("todos");
    const { title, description, priority, isCompleted } = req.body;
    const filter = { _id: new mongodb_1.ObjectId(id) };
    const updatedTodo = yield collection.updateOne(filter, { $set: { title, description, priority, isCompleted } }, { upsert: true });
    res.json(updatedTodo);
}));
exports.todosRouter.delete("/delete-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongodb_2.client.db("todosDB");
    const collection = yield db.collection("todos");
    yield collection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
    res.json({
        message: "deleted succesfully"
    });
}));
