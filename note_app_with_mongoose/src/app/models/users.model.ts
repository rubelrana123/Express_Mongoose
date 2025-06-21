import { Model, model, Schema } from "mongoose";
import { IAddress, IUser, UserInstanceMethods, UserStaticMethods } from "../interfaces/user.interfaces";
import validator from "validator";
import bcrypt from "bcryptjs";
import { Note } from "./notes.model";

 const addressSchema = new Schema<IAddress>({
     city : {type : String, required : true},
    street : {type : String, required : true},
    zip : {type : Number, required : true}

 }, {_id : false})
  const userSchema  = new Schema<IUser, UserStaticMethods, UserInstanceMethods>({
    firstName : {
        type : String,
        required : [true, "first name missing"],
        trim : true,
        minlength : [5, "{VALUE}  only need atleast 5 length"],
        maxlength : [15, "max length allow 15"]

    },
    lastName : {
        type : String,
        required : [true, "first name missing"],
        trim : true,
        minlength : [5, "{VALUE} only need atleast 5 length"],
        maxlength : [15, "max length allow 15"]

    },
   email: {
    type: String,
    required: true,
    unique: true, // creates index
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, "Invalid email address"],
  
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
    },
    address : addressSchema,
    
},{
    versionKey : false,
    timestamps : false,
    toJSON : {virtuals : true},
    toObject : {virtuals :true}
}
)
 
userSchema.method("hashPassword", async function (plainPassword: string) {
    const password = await bcrypt.hash(plainPassword, 10)
    console.log("password model method", password)
    return password
})

userSchema.static("hashPassword", async function (plainPassword: string) {
    const password = await bcrypt.hash(plainPassword, 10)
    console.log("password model static", password)
    return password
})
userSchema.pre("save", async function (){
    console.log("pre inside")
      const password = await bcrypt.hash(this.password, 10)
      this.password = password;

    })
userSchema.post("find",  async function (){
     console.log(`pre inside find `);
      
 
})
userSchema.post("save",   function (doc){
    console.log(`post inside ${doc?.firstName}`);
})
userSchema.post("findOneAndDelete",  async function (doc){
   if(doc){
     console.log(`post inside delete ${doc}`);
     await Note.deleteMany({user : doc._id});
     
   }
})

userSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`

})
export const User = model<IUser, UserStaticMethods>('Users', userSchema);

// const answer: number = User.myStaticMethod(); // 42