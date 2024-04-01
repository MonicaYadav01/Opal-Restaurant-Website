import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from 'react';
import { incrementDecrement } from '../../api/cartProducts';

const Counter = ({id})=>{

    const {token} = JSON.parse(localStorage.getItem("user")) || "";

    const [product,setProduct] = useState(1);




    const getData  = async(id,product)=>{

        try {

            const data  = await incrementDecrement(token,id,product);

            if(data)
            {
                setProduct(data.singlecart.qty);
            }
            
        } catch (error) {
            
            console.log(error);
        }

    }


    useEffect(()=>{

        token && getData(id,product);

    },[])



    const increment = async()=>{


        try {

            if(product<1) return ;

            const data  = await incrementDecrement(token,id,product+1);

            if(data)
            {
                setProduct(data.singlecart.qty);
            }
            

            
        } catch (error) {
            
            console.log(error);
        }



    }


    const decrement = async()=>{


        try {

            if(product<=1) return ;

        const data  = await incrementDecrement(token,id,product-1);

        if(data)
        {
            setProduct(data.singlecart.qty);
        }
            
        } catch (error) {
            
        }
        

    }

    const style={
        "display":"flex",
        "justifyContent":"center",
        "alignItems":"center",
        "gap": "0.2rem",
        "padding": "0rem",
        "border": "1px solid"
    }

    const buttonstyle={
        "background-color": "#f5f5f5",
        "padding": "0.1rem",
        "cursor": "pointer"
    }

    return(
        <div style={style}>
            <div style={buttonstyle} onClick={decrement}>
             <RemoveIcon/>
            </div>
            <div>{product}</div>
            <div style={buttonstyle} onClick={increment}>
            <AddIcon/>
            </div>

        </div>
    )


}

export default Counter;