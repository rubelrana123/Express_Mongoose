import express, {Application, Request,Response} from 'express';
import { model, Schema } from 'mongoose';
const app : Application = express();
app.use(express.json());
const noteSchema = new Schema({
    //  title : String,
    title : {type : String, required : true, trim : true}, // trim remove white space "  Hello  "
    content : {type : String, default : 'No content'},
    category : {type : String , enum : ["personal", "study","work", "other"],default : "personal"},
    pin : {type : Boolean , default : false},
    tags : {
        label : {type : String, required : true}, 
        color : {type : String, default : "gray"}

}
});
const Note = model("Note", noteSchema)
app.get("/notes", async(req : Request, res : Response) => {
    const notes = await Note.find({})
    res.status(201).json({
        success : true,
        message : "get note successfully",
        notes
    })
    
})
app.get("/notes/:noteId", async(req : Request, res : Response) => {
    const id = req.params.noteId;
    // const notes = await Note.findById(id);
    const notes = await Note.findOne(_id = id);

    res.status(201).json({
        success : true, 
        message : "get a note successfully",
        notes
    })
    
})
app.post("/notes/create-note", async(req : Request, res : Response) => {
    const body = req.body;
    //approach 1of post data
    // const note = new Note({
    //     title : "Eat the frog book",
    //     content : "reading a book that named eat the frogs",
    //     tags : {label :  "database"}
    // })
    // await   note.save()

    //approach 2 data post
    const note = await Note.create(body) 
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