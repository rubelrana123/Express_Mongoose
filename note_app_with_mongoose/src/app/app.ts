import express, {Application, Request,Response} from 'express';
import { model, Schema } from 'mongoose';
import { notesRoutes } from './controllers/notes.controller';
const app : Application = express();
app.use(express.json());
app.use("/notes", notesRoutes)
//approach 1 for schema and model 1 file
// const noteSchema = new Schema({
//     //  title : String,
//     title : {type : String, required : true, trim : true}, // trim remove white space "  Hello  "
//     content : {type : String, default : 'No content'},
//     category : {type : String , enum : ["personal", "study","work", "other"],default : "personal"},
//     pin : {type : Boolean , default : false},
//     tags : {
//         label : {type : String, required : true}, 
//         color : {type : String, default : "gray"}
// }
// },
// {
//     versionKey : false,
//     timestamps : true
// },
// );
// const Note = model("Note", noteSchema)
//approach 1 in one file
// app.get("/notes", async(req : Request, res : Response) => {
//     const notes = await Note.find({})
//     res.status(201).json({
//         success : true,
//         message : "get note successfully",
//         notes
//     })
    
// })
// app.get("/notes/:noteId", async(req : Request, res : Response) => {
//     const id = req.params.noteId;
//     const notes = await Note.findById(id);
//     // const notes = await Note.findOne(_id = id);
//     res.status(201).json({
//         success : true, 
//         message : "get a note successfully",
//         notes
//     })
    
// });
// app.patch("/notes/:noteId", async(req : Request, res : Response) => {
//     const noteId = req.params.noteId;
//     const body = req.body;
//     //approach 1
//       const notes = await Note.findByIdAndUpdate(noteId,body, {new : true})
//       //apporoach 2
//     //   const notes = await Note.updat eOne({_id : noteId},body, {new : true})

//       //apporach 3
// //  const notes = await Note.findOneAndUpdate(
// //   { _id: id }, // Filter to find the document
// //   { $set: { title: 'Learn Typescript', tags : {label : "Basic"} } }, // Update operations
// //   { new: true } // Options: return the modified document
// // );
//     res.status(201).json({
//         success : true, 
//         message : " a note update successfully",
//         notes
//     })
    
// })
// app.post("/notes/create-note", async(req : Request, res : Response) => {
//     const body = req.body;
//     //approach 1of post data
//     // const note = new Note({
//     //     title : "Eat the frog book",
//     //     content : "reading a book that named eat the frogs",
//     //     tags : {label :  "database"}
//     // })
//     // await   note.save()

//     //approach 2 data post
//     const note = await Note.create(body) 
//     res.status(201).json({
//         success : true,
//         message : "create note successfully",
//         note
//     })
    
// })
// app.delete("/notes/:noteId", async(req : Request, res : Response) => {
//     const noteId = req.params.noteId;
//     // apporaoach 1
//           const notes = await Note.findOneAndDelete({_id : noteId});
//       //apporoach 2
//     //   const notes = await Note.deleteOneOne({_id : noteId},body, {new : true})
//     //approach another
//     //  Note.deleteOne({ _id: noteId})
//     //   .then(result => {
//     //     if (result.deletedCount > 0) {
//     //        res.status(201).json({
//     //     success : true, 
//     //     message : " a note delete successfully",
        
//     // })
//     //     } else {
//     //       console.log('note not found');
//     //     }
//     //   })
//     //   .catch(error => {
//     //     console.error('Error deleting user:', error);
//     //   });

//         res.status(201).json({
//         success : true, 
//         message : " a note delete successfully",
//         notes
//     })
//   })
 
app.get("/", (req : Request, res : Response) => {
    res.send("welcome to the note app")
})
export default app;