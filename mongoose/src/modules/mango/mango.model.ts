import  { model, Schema } from "mongoose";
import { IMango } from "./mango.interface";
// name , variety, price,stock,origin,season,image
const mangoSchema = new Schema<IMango>({
    name : {type : String , require : true},
    variety : {type : String , require : true},
    price : {type : Number , require : true},
    stock : {type : Number , require : true},
    origin : {type : String , require : true},
    season : {type : String , require : true},
    image : {type : String , require : true},

    
   
 
})


const Mango = model<IMango>("Mango",mangoSchema);
export default Mango;