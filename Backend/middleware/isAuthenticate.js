import Jwt  from "jsonwebtoken";

export const isAuthenticate = async(req,res,next)=>{


    try {

          let token  = req.headers['authorization'];// this way i access it
        // this above thing is sent by frontend! ok how? what is req.headers ?  it is attached to req/ use? bol
        // when i implemnt if frontend then i tell you ok ok

        if(!token)
        {
            return res.status(401).json({
                message:"user is not authorized"
            });
        }
        else
        {

            token = token.split(" ")[1]; 

          
            const user  = Jwt.verify(token,process.env.JWT);
    
            req.userid = user.userId;  
           
    
            next();

        }

        
    } catch (error) {

        console.log(error.message);

        return res.status(401).json({message:"something went wrong!"});
        
    }
}