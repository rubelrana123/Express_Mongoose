import { model, Schema } from "mongoose";

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
},
{
    versionKey : false,
    timestamps : true
},
);
export  const Note = model("Note", noteSchema)