import React, { useEffect, useState } from 'react'
import { getcart, removefromcart } from '../../api/cartProducts';
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.css'
import { useNavigate } from 'react-router-dom';
import Counter from '../../components/Cart/Counter';
import OrderDetails from '../../components/Cart/Orderdetails';

const Cart = () => {


  const {token} = JSON.parse(localStorage.getItem("user")) || "";

  const [carts,setCarts] = useState([]);

  const navigate  = useNavigate();

 

  useEffect(()=>{

    const getCartData  =  async()=>{

      const data  = await  getcart(token);
  
      if(data)
      {
        setCarts(data.cartData);

      }
  
    }


    token && getCartData();

  },[carts])



  const deletefromcart = async(id)=>{

     const cart = await removefromcart(token,id);

     if(cart)
     {
       console.log(cart);
     }
  }

 

  if(carts.length===0){
    return (<div className='empty-cart'>
      <div className='logoicon'>
        <img src='./assets/emptycart.png' alt='logoimg' />
      </div>
      <p>Your cart is Empty!!</p>
      <button className='continue-btn' onClick={()=> navigate("/menu")}>Continue</button>
    </div>)
  }

  return (
    <div className='parent-container'>
    <div>
      {carts.map((item)=>(<CartItem {...item} deletefromcart={()=> token ? deletefromcart(item._id) : navigate("/login") } />))}
    </div>
     <div className='orderdetails-section'>
      <OrderDetails carts={carts}/>
    </div>
    
    </div>
  );
}

export default Cart;


const CartItem = ({_id,name,img,price,qty,deletefromcart})=>{


  

   return(
    <div className='container'>
       <div className='container-img'>
         <img src={img} alt="demoImg" />
       </div>
       <div className='container-content'>
         <h4>{name}</h4>
         <h4>Rs.{price}</h4>
         <Counter id={_id}/>
         <h4>{qty}</h4>
         <div className='deleteicon' onClick={deletefromcart}>
         <DeleteIcon/>
         </div>
       </div>
    </div>
   )

}
