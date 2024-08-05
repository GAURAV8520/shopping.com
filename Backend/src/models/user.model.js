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

    profileimg:{
        type:String
    },

    purchaseditems:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        }
    ]
   

},{timestamps:true})


export const User = mongoose.model("User",userSchema);