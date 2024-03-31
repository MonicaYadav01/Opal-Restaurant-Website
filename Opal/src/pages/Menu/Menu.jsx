import React, { useEffect, useState } from 'react'
import {getProducts} from '../../api/getProducts.js';
import './Menu.css';
import { addtocart, getcart } from '../../api/cartProducts.js';
import { useNavigate } from 'react-router-dom';



const Menu = () => {


  const {token} = JSON.parse(localStorage.getItem("user")) || "";



  const navigate = useNavigate();

  const[products, setProducts]= useState([]);
  const[carts,setCarts] = useState([]);
  const[loading, setLoading]= useState(false);


  

  const getCartData  =  async()=>{

    const data  = await getcart(token);  

    if(data)
    {
      setCarts(data.cartData);

    }

  }


  const getProductData = async()=>{

    try {

    setLoading(true);
    const data  = await getProducts();
    setProducts(data.products);
    setLoading(false);
      
    } catch (error) {
      
      console.log(error);

    }

}
  
  
  useEffect(()=>{

    getProductData();
    
  
  },[])

  useEffect(()=>{

    token && getCartData();

  },[carts])

  const addtocartProduct = async(product)=>{



    try {

   
 
    const data  = await addtocart(product,token);

    if(data)
    {
       console.log(data);

    }
      
    } catch (error) {
      
      console.log(error);

    }


  }


  if(loading)
  {
     return ( <div>Loading...</div> )
  }




  

  
    return (
      <>
       <div className='product-container'> 
        {products.length > 0 && products.map((item)=>(<Item {...item} addtocart={()=> token ? addtocartProduct(item) : navigate("/login")} key={item._id} carts={carts}/> ))}
        </div> 
      </>
    );

   


};

export default Menu;

const Item  = ({_id,name,img,price,qty,addtocart,carts})=>{

    const isFound  = carts && carts.find((item)=> item.id == _id);




    const navigate  = useNavigate();

    



    return(
      <div className='product-item'>
        <div className='product-img'> 
          <img src={img} alt="demoImg" />
        </div>
        <div className='product-content'> 
          <h2>{name}</h2>
          <p>Rs.{price}</p>
          {isFound ? <button className='go-to-cart' onClick={()=> navigate("/cart")}>Go to cart </button>: <button className='add-cart' onClick={addtocart}>Add to cart</button> }
        </div>
      </div>
    )

}