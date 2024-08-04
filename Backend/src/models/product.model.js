import mongoos from "mongoose";

const productSchema = new mongoos.Schema({
   
    name:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true

    },

    description:{
        type:String,
        
    },

    price:{
        type:Number,
        required:true,
        default:0
    }
},{timestamps:true});

export const Product= mongoos.model("Product",productSchema);