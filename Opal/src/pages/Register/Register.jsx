import React, { useState } from 'react';

import './Register.css';
import { NavLink, useNavigate } from 'react-router-dom';

import { signup}  from '../../api/auths.js';


const Register = () => {

  const[users, setUsers] = useState({
    name:"",
    email:"",
    password:"",
    comfirm:""
 });



 const[error, seterror]= useState("");

 const navigate = useNavigate();


  const submitForm = async(e)=>{


    try {

      e.preventDefault();

      const response  = await signup(users);

      if(response)
      {
        console.log(response);
        
        navigate("/menu");

        localStorage.setItem("user",JSON.stringify(response));

      }
     

      
    } catch (error) {
      
      console.log(error.response.data.message);
      seterror(error.response.data.message);


    }

   


  }


  const handleUsers = (e)=>{

    setUsers((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }));

  }

  if(error)
  {

    return ( <div> <h2>{error}</h2>  </div> )
  }


  return (
    <div className='register-container'>
      <img src="https://png.pngitem.com/pimgs/s/22-227226_delivery-logo-food-delivery-service-hd-png-download.png" alt="" />

      <form onSubmit={submitForm}>

          <h2>Register</h2>

          <div className='input-container'>


          <input type="text" name="name" id="username"  value={users.name} onChange={handleUsers} placeholder="Username" required/>
          <input type="email" name="email" id="email" placeholder="Email id"  value={users.email} onChange={handleUsers} required/>
          <input type='password' name='password' id='password' placeholder='Create a password'  value={users.password} onChange={handleUsers} required/>
          <input type='password' name='comfirm' id='comfirm' placeholder='Confirm password' value={users.comfirm} onChange={handleUsers} required/>


          </div>

         
         <div className='submit-container'>

         <button type='submit' className='submit-btn'>Submit</button>
         <p>Already have an account?<NavLink to="/login">LogIn</NavLink></p>


         </div>


      </form>

    </div>
  )
}

export default Register;