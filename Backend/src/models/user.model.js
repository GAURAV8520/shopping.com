import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },

    password:{
        type:String,
        required:[true,"password is required"]

    },

    typeofUser:{
        type:String,
        required:['student','company'],
        default:'student',
    },

    profileimg:{
        type:String
    },

    productforsale:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        }
    ],


    purchaseditems:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        }
    ]
   

},{timestamps:true})


export const User = mongoose.model("User",userSchema);