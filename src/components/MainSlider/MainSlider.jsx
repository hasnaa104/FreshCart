import React from 'react'
import Slider from 'react-slick'
import slider1 from "../../images/slider/slider-1.jpeg"
import slider2 from "../../images/slider/slider-2.jpeg"
import slider3 from "../../images/slider/slider-3.png"

export default function MainSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
  return (
    <>
    <div className='my-3 container'>
    <Slider {...settings}>
            <img src={slider2} alt="" />
            <img src={slider3} alt="" />
            <img src={slider1} alt="" />
   
    </Slider>
    </div>
          
  

    </>
  )
}
