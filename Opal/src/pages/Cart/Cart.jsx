import React, { useEffect, useState } from 'react'
import { getcart, removefromcart } from '../../api/cartProducts';
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.css'

const Cart = () => {


  const {token} = JSON.parse(localStorage.getItem("user"));

  const [carts,setCarts] = useState([]);



  

  useEffect(()=>{

    const getCartData  =  async()=>{

      const data  = await getcart(token);
  
      if(data)
      {
        setCarts(data.cartData);

      }
  
    }


    getCartData();
  },[carts])



  const deletefromcart = async(id)=>{

     const cart = await removefromcart(token,id);

     if(cart)
     {
       console.log(cart);
     }
  }

  return (
    <div className='parent-container'>

    <div>
      {carts.map((item)=>(<CartItem {...item} deletefromcart={()=> deletefromcart(item._id)} />))}
    </div>
    <div>
      <OrderDetails carts={carts}/>
    </div>
    

    </div>
  )
}

export default Cart;


const CartItem = ({_id,name,img,price,qty,deletefromcart})=>{


  

   return(
    <div className='container'>
       <div className='container-img'>
         <img src={img} alt="demoImg" />
       </div>
       <div className='container-content'>
         <h2>{name}</h2>
         <h3>Rs.{price}</h3>
         <h4>{qty}</h4>
         <div onClick={deletefromcart}>
         <DeleteIcon/>
         </div>
       </div>
    </div>
   )

}



const OrderDetails = ({carts})=>{



  const getTotal = ()=>{

    const total = carts.reduce((acc,curr)=> (curr.price*curr.qty) + acc ,0);
    return total;

  }


    return(
      <div>
        <div>
           {/* {carts.map((item)=> (<p>{item.name}*{item</p> ))} */}
        </div>
        <div>
          <div>
            <p>SubTotal</p>
            <p>RS.{getTotal()}</p>
          </div>
          <div>
            <p>Delivery</p>
            <p>Free</p>
          </div>
          <button>Placed Order</button> 
        </div>
      </div>
    )


}