import { Product } from "../models/product.model.js";
import { User } from "../models/user.model.js";
import { v2 as cloudinary } from "cloudinary";

export const addjob = async (req,res)=>{
    try {

        const user = await User.findById(req.user._id).select("-password")

        const {name,description,price,numberofitems}=req.body;
        let {photo}=req.body;

        if(name?.length>100){
            res.status(200).json({error:"name should not not be that much long"})

        }
        if(description?.length>500){
            res.status(200).json({error:"description only 500 words are allowed"})

        }

        if(photo){
            const uploadResponse=await cloudinary.uploader.upload(photo);
            photo=uploadResponse.url;
        }

        const newJob = new Product({
            name,
            photo:photo||"",
            description,
            price,
            numberofitems,
        });

        if(newJob){
            await newJob.save();

            res.status(200).json({newJob})


        }else{
            res.status(404).json({error:"invalid product datat"})
        }

        res.status(200).json({user})


        
    } catch (error) {
        console.log("error in add job controller :",error);
        res.status(500).json({error:"Internal server error"})
    }
}