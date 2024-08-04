
import dotenv from 'dotenv'
import connectDB from './DB/index.js'
import express from 'express'

import {app} from './app.js'

dotenv.config()


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