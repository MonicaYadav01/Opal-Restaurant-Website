import axios from "axios";

export const BASE_URL  = "https://opal-restaurant-website-yz7e.vercel.app/";

export const getProducts = async()=>{

   

    const response = await axios.get(`${BASE_URL}products/`);

    if(response)
    {
        return response.data;
    }

}


