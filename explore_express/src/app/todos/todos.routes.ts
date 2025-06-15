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

 
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { client } from "../../config/mongodb";



 
 
  


export const todosRouter = express.Router()

todosRouter.get("/", async (req: Request, res: Response) => {

    const db = await client.db("todosDB")
    const collection = await db.collection("todos")


    const cursor = collection.find({});
    console.log("cursor--------------------------------------------", cursor);
    const todos = await cursor.toArray()
    res.json(todos)
})

todosRouter.post('/create-todo', async (req: Request, res: Response) => {
    const { title, description, priority } = req.body;
console.log("post", req.body)

    const db = await client.db("todosDB")
    const collection = await db.collection("todos")
    await collection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isCompleted: false 
    })

    const cursor = collection.find({})
    const todos = await cursor.toArray()
    res.json(todos)
})

todosRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req.params.id
    const db = await client.db("todosDB")
    const collection = await db.collection("todos")

    const todo = await collection.findOne({ _id: new ObjectId(id) })
    res.json(todo)
})
todosRouter.put("/update-todo/:id", async (req: Request, res: Response) => {
    const id = req.params.id
    const db = await client.db("todosDB")
    const collection = await db.collection("todos")

    const { title, description, priority, isCompleted } = req.body;
    const filter = { _id: new ObjectId(id) }

    const updatedTodo = await collection.updateOne(
        filter, 
        { $set: { title, description, priority, isCompleted } }, 
        { upsert: true }
    )
    res.json(updatedTodo)
})
todosRouter.delete("/delete-todo/:id", async (req: Request, res: Response) => {
    const id = req.params.id
    const db = await client.db("todosDB")
    const collection = await db.collection("todos")

    await collection.deleteOne({ _id: new ObjectId(id) })
    res.json({
        message: "deleted succesfully"
    })
})

 