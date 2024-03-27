import React from 'react'
import './Slider.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';

import { Icon } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Sliders() {



    let images  = [
         'https://www.remotelands.com/travelogues/app/uploads/2022/09/Korean-cuisine-header-2.jpg',
         'https://veggieanh.com/wp-content/uploads/2023/07/Bulgogi-Kimbap-with-Tempeh-featured-image.jpg',    
         'https://mykoreankitchen.com/wp-content/uploads/2022/01/5.-Homemade-Kimchi.jpg',
         'https://peaktoplate.com/wp-content/uploads/2022/06/pronghorn-bibimbap-in-bowl-with-chopsticks.jpg'
     ];

     const NextArrow = ({ onClick }) => {
      return (
          <div className="arrow next" onClick={onClick}>
              <Icon component={ArrowForwardIosIcon} className='right-arrow-icon' />
          </div>
      );
  };
  
  const PrevArrow = ({ onClick }) => {
      return (
          <div className="arrow prev" onClick={onClick}>
              <Icon component={ArrowBackIosIcon} className='left-arrow-icon' />
          </div>
      );
  };
  


  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 760,
            settings: {
                autoplay: false,
            }
        }
    ]
};



  return (
    <>
     <Slider {...settings} className='slider-container'>
      {images && images.map((item)=>(<Item item={item}/>))}
     
    </Slider>
    </>
   
  )
}



const Item = ({item})=>{

    return(<div className='slide-container'>
         <img src={item} alt='demoImg' className='img-style'/>
        <button className='order-now'><NavLink to="/menu">Order Now!</NavLink></button>
    </div> );
};



export default Sliders;