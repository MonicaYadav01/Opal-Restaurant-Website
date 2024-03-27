import express from 'express';

import {ProductModel} from '../models/products.js';

export const productRoute  = express.Router();

productRoute.get("/",async(req,res)=>{


    const products = await ProductModel.find();

    res.status(200).json({products});


})


