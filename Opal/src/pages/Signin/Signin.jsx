import React, { useState } from 'react';


import '../Register/Register.css';

import { NavLink, useNavigate } from 'react-router-dom';
import { login } from '../../api/auths';




const Signin = () => {



 const[users, setUsers] = useState({
    email:"",
    password:""
 });

 const [error, seterror] = useState("");

 const navigate  = useNavigate();






  const submitForm = async(e)=>{

    try{

      e.preventDefault();
      const response  = await login(users);

      if(response)
      {
        console.log(response);
        navigate("/menu");
        localStorage.setItem("user",JSON.stringify(response));
      }
    }
    catch(error) {
      console.log(error.response.data.message)
      seterror(error.response.data.message)
    }

  }





  const handleusers = (e)=>{

    setUsers((prev)=>({
      ...prev,
      [e.target.name]:e.target.value

      }))

  }
  if(error)
  {

    return ( <div> <h2>{error}</h2>  </div> )
  }


  
  return (
    <div className='register-container'>
      <img src="https://png.pngitem.com/pimgs/s/22-227226_delivery-logo-food-delivery-service-hd-png-download.png" alt="" />


        
      <form onSubmit={submitForm}>

          <h2>SignIn</h2>

          <div className='input-container'>

          <input type="email" name="email" id="email"  value={users.email} onChange={handleusers} placeholder="Email id" required/>
          <input type='password' name='password' id='password' value={users.password} onChange={handleusers} placeholder='Enter a password' required/>

          </div>

         
         <div className='submit-container'>
         <button type='submit' className='submit-btn'>SignIn</button>
         <p>Don't have an account? <NavLink to="/register">Register</NavLink></p>
         </div>


      </form>

    </div>
  )
}

export default Signin;