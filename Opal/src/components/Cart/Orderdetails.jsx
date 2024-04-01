import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteusercart } from '../../api/cartProducts';


const OrderDetails = ({carts})=>{

  const {token} = JSON.parse(localStorage.getItem("user")) || "";
    const navigate  = useNavigate();

    const getTotal = ()=>{
  
      
      const total = carts.reduce((acc,curr)=> (curr.price*curr.qty) + acc ,0);
      return total;
  
    }

    const style={
      "display":"flex",
      "flex-direction":"column",
      "gap":"1.2rem"
    }

    const buttonstyle={
      "padding":"10px 20px",
      "backgroundColor":"#000000",
      "color":"#ffffff",
      "cursor":"pointer"
    }
    
    const deletecart =async()=>{
        
      const data  = await deleteusercart(token);

      if(data)
      {
         console.log(data);
         navigate("/ordersucessful");
      }
        
    }
  
  
      return(
        
          <div style={style}>
            <h4>Order Summary</h4>
            <hr/>
            <div>
              <span>Sub Total</span> 
              <p>RS.   {getTotal()}</p>
            </div>
            <div>
              <p>Delivery Free</p>
            </div>
            <div>
              <p>Total Amount</p> 
              <p>RS.   {getTotal()}</p>
            </div>
            <button style={buttonstyle} onClick={()=> deletecart()}>Place Order</button> 
          </div>
          
      )
  
  
  }
export default OrderDetails;