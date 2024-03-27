import axios from "axios";
import { BASE_URL } from "./getProducts";

export const addtocart =async(product,token)=>{

   try {

    const {_id,name,img,price,qty} = product;

    // 1. api route
    //2.  data we sent from client to server now server it access through req.body! ok 
    //3. header in which i pass token as Authorization , didn't understand about the header, these are some config and advanced features to implemnt thing in beast efficeint manner. explain me later how it works ok

    const response = await axios.post(`${BASE_URL}cart/addtocart`,{id:_id,name,img,price,qty},{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`,
        },


     })

     if(response)
     {
      return response.data;
     }

    
    
   } catch (error) {
    
     console.log(error);
     
   }
} 

export const getcart =async(token)=>{

   // now i times to implement to getcart so i need only token 
   // this api path or route ok  ok pass token in header ok ok explain me later kal se jitna kia hai addtocart ka part

    const response = await axios.get(`${BASE_URL}cart/`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`,
        },


     })

     return response.data;
} 
 export const removefromcart = async(token,id)=>{
  const response = await axios.get(`${BASE_URL}cart/removefromcart/${id}`,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`,
    },


 })

 return response.data;
 }


