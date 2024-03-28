import React from 'react'
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import './Footer.css';



const Footer = () => {
  return (
     <footer className='footer'>
      <div className='logoicon'>
        <img src='./assets/logo1.png' alt='logoimg' />
      </div>
      <div className='footer-nav'>
        <h2>QUICK LINKS</h2>
        <NavLink to='/' className='footer-navlink'>
          Home
        </NavLink>
        <NavLink to='/menu' className='footer-navlink'>
          Menu
        </NavLink>
        <NavLink to='/about' className='footer-navlink'>
          About
        </NavLink>
        <NavLink to='/cart' className='footer-navlink'>
          Cart
        </NavLink>
      </div>
      <div className='footer-social'>
        <h2>SOCIAL MEDIA</h2>
         <div className='socials-icon'> 
         <span className='FacebookIcon'>
          <FacebookIcon/>
         </span>
         <span className='InstagramIcon'>
          <InstagramIcon/>
         </span>
         <span className='TwitterIcon'>
          <XIcon/>
         </span>
         </div>
      </div>
      <div className='footer-feedback'>
        <p>Your Feedback really matter to us!!</p>
        <form>
          <input type="text" name='feedback' placeholder='Your feedback!!'>
          </input>
        </form>
      </div>
     </footer>
  );
};

export default Footer;