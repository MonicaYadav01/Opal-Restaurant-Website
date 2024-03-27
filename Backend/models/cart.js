import mongoose from "mongoose";

const CartSchema  = new mongoose.Schema({


    user:{

        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },

    id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true

    },
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


export const CartModel  = mongoose.model("cart", CartSchema);


