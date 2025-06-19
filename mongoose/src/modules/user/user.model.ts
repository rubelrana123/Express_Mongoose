import Schema, { model } from "mongoose";
const userSchema = new Schema<IUser>({
    name : {type : String , require : true},
    email : {type : String , require : true, validate : {
        validator : function (value) {
            return /122@/2/3dsomethinghrereregex/.test(value);
        },
        message : props => `${props.value} is not a valid` ,
        immutable : true
    }},
    phone : {type : String , require : true},
    password : {type : String , require : true},
    role : {
        type : String,
        enum : ["Admin","Customer"],
        require : true
    }
})


const User = model<IUser>("user",userSchema);
export default User;