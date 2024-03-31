import React, { useEffect } from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  

  const navigate = useNavigate();


  const {token} = JSON.parse(localStorage.getItem("user")) || "";
  

  const handleUser = ()=>{

   

    if(token)
    {
      navigate("/profile");
    }
    else
    {
      navigate("/login");
    }

   
    
  }

  return (
    <nav className='navbar'>

      
      <div className='logoicon'>
        <img src='./assets/logo1.png' alt='logoimg' />
      </div>

        <div className='nav-bar1'>
            <NavLink to="/"  className="nav-link">
             Home
            </NavLink>
            <NavLink to="/Menu" className="nav-link">
             Menu
            </NavLink>
            <NavLink to="/About" className="nav-link">
             About
            </NavLink> 
        </div>

        <div className='nav-bar2'>
            <NavLink to="/Cart" className="nav-ink">
            <div className='nav-cart-count'></div>
             <ShoppingCartIcon/>
            </NavLink>
            <div className='nav-profile-icon'onClick={()=> handleUser()}>
              <AccountCircleIcon/>
            </div>
        </div>

    </nav>
  )
}

export default Header;