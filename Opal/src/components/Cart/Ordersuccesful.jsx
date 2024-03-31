import React from 'react'

const Ordersuccesful = () => {
    
  const style={
    "display":"flex",
    "justifyContent":"center",
    "alignItems":"center",
    "flex-direction":"column",
    "gap":"0.3rem",
  }

 

  return (
    <div style={style}>
      <img src='./assets/ordersuccess.png' alt='logoimg' />
      <h3>Order Successful</h3>
      <hr/>
      <div>
      <p>This is a demo website, that's why payment method is not added</p>
      </div>
    </div>
  )
}

export default Ordersuccesful;