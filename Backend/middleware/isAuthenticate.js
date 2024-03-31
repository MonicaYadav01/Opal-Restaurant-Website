import Jwt  from "jsonwebtoken";

export const isAuthenticate = async(req,res,next)=>{


    try {

          let token  = req.headers['authorization'];

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