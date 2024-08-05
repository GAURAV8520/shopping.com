import { User } from "../models/user.model.js"
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import bcrypt from 'bcrypt'


export const SiginUp= async (req,res)=>{
    try {
        const {username, email, password}=req.body;


        console.log(username,email,password);


        const user= await User.findOne({username})
        const isemail  = await User.findOne({email})

        if((user || isemail)){
            res.status(200).json({error:"username or email already taken"})
        }

        if(password?.length < 6){
            res.status(200).json({error:"password must be of 6 character"})
        }

        const salt = await bcrypt.genSalt();
        const hashedpassword = await bcrypt.hash(password,salt)
        

        const newUser = new User({
            username,
            email,
            password:hashedpassword
        })

        if(newUser){

            generateTokenAndSetCookie(newUser._id,res)
            await newUser.save();


            res.status(200).json({
                _id:newUser._id,
                username:newUser.username,
                email:newUser.email
            })


        }
        else{

            res.status(400).jaon({error:"Invalid user data"})
        }


        



    } catch (error) {
        console.log("error in signup controller :",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}


// export const login = async (req,res) =>{
    
//     try {

//         const {username,password}=req.body;

//         const user = await User.findOne({username})

        



//         if(!user){
//             res.status(404).json({error:"username not found "})
//         }





        
//     } catch (error) {
        
//     }

// }

