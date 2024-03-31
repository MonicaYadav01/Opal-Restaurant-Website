import  express from "express";
import { getCart,addTocart,removefromcart, incrementDecrement, removecart } from "../controllers/cartController.js";
import { isAuthenticate } from "../middleware/isAuthenticate.js";

export const cartRoute  = express.Router();

cartRoute.get("/",isAuthenticate,getCart);

cartRoute.post("/addtocart",isAuthenticate,addTocart);

cartRoute.get("/removefromcart/:id",isAuthenticate,removefromcart);

cartRoute.post("/:id",isAuthenticate,incrementDecrement);

cartRoute.post("/removecart",isAuthenticate,removecart);

