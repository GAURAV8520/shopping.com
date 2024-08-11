
import dotenv from 'dotenv'
import connectDB from './DB/index.js'
import express from 'express'

import {v2 as cloudinary} from 'cloudinary'


dotenv.config()
import {app} from './app.js'


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});




const PORT = process.env.PORT || 9000;


connectDB()
.then(()=>{
    app.listen( PORT,()=>{
        
        console.log(`server is running at port :${PORT}`)
    })
})
.catch((error)=>{
    console.log("MONGODB db connection failed !!!", error);
})