import express, {Application, Request,Response} from 'express';
import { model, Schema } from 'mongoose';
const app : Application = express();

const noteSchema = new Schema({
     title : String,
    content : String
});
const Note = model("Note", noteSchema)

app.post("/create-note", (req : Request, res : Response) => {
    const note = new Note({
        title : "Eat the frog book",
        content : "reading a book that named eat the frogs"
    })
    res.status(201).json({
        success : true,
        message : "create note successfully",
        note
    })
    
})
app.get("/", (req : Request, res : Response) => {
    res.send("welcome to the note app")
})
export default app;