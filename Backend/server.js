import express from 'express';
import cors from 'cors';

import {config} from 'dotenv'

import { database } from './database/database.js';
import { productRoute } from './routes/productRoute.js';
import { userRoute } from './routes/userRoute.js';
import { cartRoute } from './routes/cartRoute.js';

const server = express();  //main 

config({path:"./config.env"});

server.use(express.json());

server.use(cors());


class  App{


    constructor(){

        this.init();
        this.database();
        this.listen();
        this.allRoutes();

    }


    database(){

      database()

    }


    init(){

        server.get("/",async(req,res)=>{

            res.status(200).json({home:"home"});
        
        });

    }

    allRoutes(){

        server.use("/products",productRoute);
        server.use("/users",userRoute);
        server.use("/cart",cartRoute);

    }


    listen(){

        server.listen(process.env.PORT,()=>{

            console.log("server is running!");
        
        });

    }



}


new App();











