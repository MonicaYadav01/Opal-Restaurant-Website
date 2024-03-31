import axios from "axios";
import { BASE_URL } from "./getProducts";

export const addtocart =async(product,token)=>{

   try {

    const {_id,name,img,price,qty} = product;

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



 export const incrementDecrement = async(token,id,qty)=>{
  const response = await axios.post(`${BASE_URL}cart/${id}`,{qty},{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`,
    },


 })

 return response.data;
 }

 export const removecart= async(token)=>{
  const response = await axios.post(`${BASE_URL}cart`,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`,
    },


 })

 return response.data;
 }


