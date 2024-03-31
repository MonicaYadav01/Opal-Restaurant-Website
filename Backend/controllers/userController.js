import { UserModel } from "../models/users.js";
import bcrypt from 'bcrypt';  
import Jwt  from "jsonwebtoken";  



export const signUp = async(req,res)=>{


    const { name, email, password} = req.body;


    
    const user = await UserModel.findOne({email:email});


    if(user)  
    {
        return res.status(400).json({message:"user already exist!"})  
    }


    
    const hashPassword = await bcrypt.hash(password,10);



    const newUser = await UserModel.create({name:name,email:email,password:hashPassword});

    const token = Jwt.sign({userId:newUser._id},process.env.JWT);

    return res.status(201).json({user:newUser,token:token});

}


export const signin = async(req,res)=>{



    const { email, password} = req.body;


    const user = await UserModel.findOne({email:email});

    if(!user)
    {
        return res.status(400).json({message:"user is not registered!"})
    }


    const hashPassword = await bcrypt.compare(password,user.password);

  
    if(hashPassword)
    {


        const token = Jwt.sign({userId:user._id},process.env.JWT);
        return res.status(201).json({user:user,token:token});


    }
   


}


