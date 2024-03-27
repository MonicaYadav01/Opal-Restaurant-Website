import mongoose from "mongoose";

const ProductSchema  = new mongoose.Schema({
    name:{

        type:String,
        required:true
    
    },

    price:{

        type:Number,
        required:true
    }
    ,
    qty:{

        type:Number,
        required:true
    }
    ,

    img:{
        type:String,
        required:true
    }
});


export const ProductModel  = mongoose.model("products",ProductSchema);


