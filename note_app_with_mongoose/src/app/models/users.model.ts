import { model, Schema } from "mongoose";
import { IUSer } from "../interfaces/user.interfaces";
import validator from "validator";
  const userSchema  = new Schema<IUSer>({
    firstName : {
        type : String,
        required : [true, "first name missiong"],
        trim : true,
        minlength : [5, "{VALUE}  only need atleast 5 length"],
        maxlength : [15, "max length allow 15"]

    },
        lastName : {
        type : String,
        required : true,
        trim : true,
        minlength : [5, "{VALUE} only need atleast 5 length"],
        maxlength : [15, "max length allow 15"]

    },
    email : {
        type : String, 
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        //approach 1
       validate : [ validator.isEmail, "invalid email address"]
        //approach 2
        // validate: {
//     validator: function (v: string) {
//       // Basic email pattern
//       return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
//     },
//     message: (props: any) => `${props.value} is not a valid email address!`
//   }
        //approach 2
    //    match: [
    //   /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    //   "Please fill a valid email address",
    // ],
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        uppercase : true,
        enum : {
             values : ['USER','ADMIN', 'SUPER-ADMIN'],
             message : "type a valid role"
        },
        default : 'USER'
    },
    age : {
        type : Number,
        required : true,
        min : 18,
        max : 60
    }

})

export  const User = model("Users", userSchema)
