import React, { useContext } from 'react'
import Products from '../Products/Products'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { notify } from '../../utilities/Notify'

export default function Product({Products}) {

  let {addToCart} = useContext(StoreContext)
  async function addProduct(productId){
    let token = localStorage.getItem('token')
    if (token){
      let response = await addToCart(token,productId)
      if(response.status == 200){
        notify('product added successfully','success')
      }
console.log(response)

    }else{
      alert('you are not logged in')
    }
    

  }
  return (
    <>
    {Products.map((item)=>{
      return <div className='col-md-2 my-4' key={item._id}>
       <div className='product'>
       <Link to={'/product-details/'+item._id}>
       <img src={item.imageCover} className='w-100' alt=''/>
        <h6 className='text-main'>{item.category.name}</h6>
        <p className='fw-bolder'>{item.title.split(' ').slice(0,2).join(' ')}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <span>{item.price} EGP</span>
          <div>
            <i className='fas fa-star rating-color'></i>
            {item.ratingsAverage}
            </div>
        </div>
       
       </Link>
        <button onClick={()=>addProduct(item._id)} className='btn text-white bg-main w-100'>Add To Cart</button>

       </div>


      </div>
    })}

    
    </>
  )
}
