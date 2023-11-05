import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

export default function Checkout() {
   let {onlinePayment} = useContext(StoreContext)
    async function submitForm(values){
        let {data} = await onlinePayment('653e8915b4143900338e894f',values)
        if (data.status === 'success'){
            window.location.href=data.session.url
        }
console.log(values)
    } 
    let formik = useFormik({
        initialValues:{
            details:'',
            city:'',
            phone:''
        },
        onSubmit:submitForm
    })
  return (
    <>
    <form onSubmit={formik.handleSubmit} className='w-50 mx-auto' >
        <h2>Checkout Now</h2>
        <label for='details'>Details</label>
        <input className='form-control' name='details' id='details' type='text' onChange={formik.handleChange} value={formik.values.details}></input>
    
        <label for='city'>City</label>
        <input className='form-control' name='city' id='city' type='text' onChange={formik.handleChange} value={formik.values.city}></input>
    
        <label for='phone'>Phone</label>
        <input className='form-control' name='phone' id='phone' type='phone' onChange={formik.handleChange} value={formik.values.phone}></input>
    <button className='btn btn-outline-success mt-3 w-100' type='submit'>Pay</button>
    </form>

    
    
    
    
    
    </>
  )
}
