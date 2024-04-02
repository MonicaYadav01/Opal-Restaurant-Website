import React from 'react'
import { useNavigate } from 'react-router-dom';


const Ordersuccesful = () => {
    const navigate = useNavigate();
  const style={
    "display":"flex",
    "justifyContent":"center",
    "alignItems":"center",
    "flex-direction":"column",
    "gap":"0.3rem",
  }
  const buttonstyle={
    "padding":"10px 20px",
      "backgroundColor":"#000000",
      "color":"#ffffff",
      "cursor":"pointer"
  }
  const pstyle={
    "font-size": "small"
  }

 

  return (
    <div style={style}>
      <img src='./assets/ordersuccess.png' alt='logoimg' />
      <h3>Order Successful</h3>
      <hr/>
      <button style={buttonstyle} onClick={()=> navigate("/menu")}>Explore more</button>
      <div>
      <p style={pstyle}>This is a demo website, that's why payment method is not added</p>
      </div>
    </div>
  )
}

export default Ordersuccesful;