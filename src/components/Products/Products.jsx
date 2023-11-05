
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../../utilities/BaseUrl'
import Product from '../Product/Product'

export default function Products() {
  const [Products,setProducts] = useState([])

  const getAllProducts = async()=>{
    let {data} = await axios.get(`${baseUrl}/products`)
    console.log(data.data)
    setProducts(data.data)

  }

  useEffect(()=>{
    getAllProducts();
  },[])

  return (
    <>
    <div className="container">
      <div className="row">
      <Product Products={Products}/>

      </div>
    </div>
    
    </>
  )
}
