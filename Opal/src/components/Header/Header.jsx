import React, { useEffect } from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';


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
        <div className='mobile-nav'>
        <div className='HomeIcon' onClick={()=> navigate("/")}>
             <HomeIcon/> </div>
        <div className='RestaurantMenuIcon' onClick={()=> navigate("/menu")}>
             <RestaurantMenuIcon/>
        </div>
        </div>
        
        <div className='nav-bar2'>
            <NavLink to="/Cart" className="nav-link">
             <ShoppingCartIcon/>
            </NavLink>
            <div className='profile-icon' onClick={()=> handleUser()}>
              <AccountCircleIcon/>
            </div>
        </div>
    </nav>
  )
}

export default Header;