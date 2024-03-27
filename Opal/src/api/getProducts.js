import axios from "axios";

export const BASE_URL  = "http://localhost:5000/";

export const getProducts = async()=>{

   

    const response = await axios.get(`${BASE_URL}products/`);

    if(response)
    {
        return response.data;
    }

}


