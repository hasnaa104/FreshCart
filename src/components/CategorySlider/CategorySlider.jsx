import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../../utilities/BaseUrl'
import Slider from 'react-slick'


export default function CategorySlider() {
const [categories,setCategories] = useState([])

  const getAllCategories = async()=>{
    let {data} = await axios.get(`${baseUrl}/categories`)
    setCategories(data.data)

  }

  useEffect(()=>{
    getAllCategories();
  },[])

  var settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay:true
  };
  return (
    <>
    <div className='container my-3'>
      <h3>Shop Popular Categories</h3>
    <Slider {...settings} autoplaySpeed={3000}>
            {categories.map((item)=>{
             return <div ket={item._id}>
           <img src={item.image} alt='' className='w-100' height={300}/>
           <h6>{item.name}</h6>
              </div>
            })}
   
    </Slider>

    </div>
   
    
    
    </>
  )
}
