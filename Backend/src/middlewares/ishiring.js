import { User } from "../models/user.model.js";
import jwt from 'jsonwebtoken'



export const ishiring =async (req,res,next)=>{

    
    try {
        
        const token = req.cookies.jwt;

        console.log("token is :",token)

        if(!token){
            return res.status(401).json({error:"Unauthorise no token provided"})
        }

        const decoded  = jwt.verify(token,process.env.JWT_SECRET);

        console.log("decoded is :",decoded)
        
        if(!decoded){
            return res.status(401).json({error:"Unauthorised Invalid token"});
        }

        const user = await User.findById(decoded.userId).select("-password")
        
        if(!user.typeofUser != 'company'){
            return res.status(404).json({error:"you cannot post a job"})
        }

        req.user=user;
        next();

    } catch (error) {
        console.log("error in protect middalware :",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}