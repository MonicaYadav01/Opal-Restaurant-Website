import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderDetails = ({carts})=>{

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
            <button style={buttonstyle} onClick={()=> navigate("/ordersucessful")}>Place Order</button> 
          </div>
          
      )
  
  
  }
export default OrderDetails;