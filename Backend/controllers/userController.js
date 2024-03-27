import { UserModel } from "../models/users.js";
import bcrypt from 'bcrypt';  //same for this to encrypt password!
import Jwt  from "jsonwebtoken";  // we need to install it 



export const signUp = async(req,res)=>{


    const { name, email, password} = req.body;

    // whatever data we takes from user it comes into req.body ok! ok

    
    const user = await UserModel.findOne({email:email});

    // line 14 i am checking user exist in usermodel or not using email ok! 

    if(user)  // if user exist then how i can register them ok! ok
    {
        return res.status(400).json({message:"user already exist!"}) // it runs then ok 
    }


    // now the process begins to register user in usermodel collection ok 

    // before stroing password into db directly we need to encrypt it using bcrypt lib ok
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


