import { model, Schema } from "mongoose";
import { IUSer } from "../interfaces/user.interfaces";

  const userSchema  = new Schema<IUSer>({
    firstName : {
        type : String,
        required : true,
        trim : true

    },
        lastName : {
        type : String,
        required : true,
        trim : true

    },
    email : {
        type : String, 
        required : true,
        trim : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['user','admin'],
        default : 'user'
    }

})

export  const User = model("Users", userSchema)
