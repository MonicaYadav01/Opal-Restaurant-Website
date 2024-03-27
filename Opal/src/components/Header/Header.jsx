import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  

  const navigate = useNavigate();


  const handleUser = ()=>{

    const data  = localStorage.getItem("user");

    if(data)
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

      {/* logo */}
      <div className='logoicon'>
        <img src='./assets/logo.png' alt='logoimg' />
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
            <div className='nav-cart-count'>0</div>
             <ShoppingCartIcon/>
            </NavLink>
            <div onClick={()=> handleUser()}>
              <AccountCircleIcon/>
            </div>
        </div>

    </nav>
  )
}

export default Header;