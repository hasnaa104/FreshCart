import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../utilities/BaseUrl'
import axios from 'axios'

export default function ProductDetails() {
    let {id} = useParams()

    const [Product,setProduct] = useState([])

  const getProduct = async()=>{
    let {data} = await axios.get(`${baseUrl}/products/${id}`)
    console.log(data.data)
    setProduct(data.data)

  }

  useEffect(()=>{
    getProduct();
  },[])

  return (
    <>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-3">
                <img src={Product.imageCover} alt='' className='w-100'/>
            </div>
            <div className="col-md-9">
                <h3>{Product.title}</h3>
                <p className='text-muted'>{Product.description}</p>
                <div className='d-flex justify-content-between'>
                  <p>{Product.price} EGP</p>
                  <div>
                    <i className='fa-solid fa-star text-warning'></i>{Product.ratingsAverage}
                  </div>
                </div>
                <button className='btn btn-success w-100'>+ Add Cart</button>

            </div>
        </div>
    </div>
    
    </>
  )
}
