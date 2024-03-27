import axios from "axios";
import { BASE_URL } from "./getProducts.js";

export const signup = async(users)=>{


    const {name,email,password} = users;
    
    const response = await axios.post(`${BASE_URL}users/signup`,{
        name:name,
        email:email,
        password:password
    });


    if(response)
    {
        return response.data;
    }

}



export const login = async({email,password})=>{

    const response = await axios.post(`${BASE_URL}users/login`,{
        email:email,
        password:password
    });


    if(response)
    {
        return response.data;
    }

}