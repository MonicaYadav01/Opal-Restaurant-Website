import  express from "express";
import { getCart,addTocart,removefromcart } from "../controllers/cartController.js";
import { isAuthenticate } from "../middleware/isAuthenticate.js";

export const cartRoute  = express.Router();

// Express (main) ok ok

//  then i created independent router which is child of main express ok ok
//  like cartRouter , userRouter  (I am giving you example of child express) i got it child router ko call kia hai server.js me na

// if I want to add to cart then it is important that user is logged in or not! ok yes 
//for that we are gonna implement a middleware called   sAuthenticate user got it , what is use of it?
// if user is not logged in then we can't add vo smjha me puch rhi isAuthenticate kya hota hai? kya hai ye  
// it is just a method and u can give any name i am giving here isAuthenticate ok
// it is really imp not ignore it ok ok

cartRoute.get("/",isAuthenticate,getCart);

cartRoute.post("/addtocart",isAuthenticate,addTocart);

cartRoute.get("/removefromcart/:id",isAuthenticate,removefromcart);

// ok ok


