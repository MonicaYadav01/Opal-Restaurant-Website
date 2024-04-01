import { CartModel } from "../models/cart.js";


export const getCart = async(req,res)=>{    


    const cartData = await CartModel.find({user:req.userid});


    return res.status(200).json({cartData});

    

}


export const addTocart= async(req,res)=>{  

    try {

        const {id,name,img,price,qty} = req.body;

        const singleCart = await CartModel.create({
            user:req.userid,
            id,
            name,
            img,
            price,
            qty
        });

          res.status(201).json({singleCart});

        
    } catch (error) {

        console.log(error.message);

        res.status(400).json({message:"UnAuthorized!"});

        
    }


}

export const removefromcart = async(req,res)=>{
    

    try {

        const singlecart =  await CartModel.findByIdAndDelete(req.params.id);

        res.status(200).json({singlecart});
        
    } catch (error) {

        console.log(error.message);

        res.status(400).json({message:"unAuthorized"});
        
    }

    

}


export const incrementDecrement = async(req,res)=>{

    try {

       const {qty} = req.body;

       const singlecart = await CartModel.findByIdAndUpdate(req.params.id,{qty},{ new: true })

       res.status(200).json({singlecart});

    } catch (error) {

       res.status(400).json({message:"unAuthorized!"});
       console.log(error.message);
    }

 }


export const deleteusercart = async(req,res)=>{
    

    try {

        const deleteCartItems =  await CartModel.deleteMany({user:req.userid});

        res.status(200).json({deleteCartItems});
        
    } catch (error) {

        console.log(error.message);

        res.status(400).json({message:"unAuthorized"});
        
    }

    

}
 