import { useFormik } from 'formik'
import * as yup from 'yup'
import React, { useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../../utilities/BaseUrl'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export default function Register() {
  const notify = (msg,type) => {
    toast[type](msg);
  }
  let [loading,setLoading] = useState(false)

  let navigate = useNavigate()

  let validationSchema = yup.object({
    name:yup.string().min(3).max(15).required(),
    email:yup.string().email().required(),
    password:yup.string().matches(/^[A-Z][a-z0-9@#$%]{5,}$/,'password must match the pattern').required(),
    rePassword:yup.string().oneOf([yup.ref('password')],'pasword and repassword not match').required(),

  })


  let registerFormik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:''

    },
    validationSchema
    ,
    onSubmit:(values)=>{
      setLoading(true)
      console.log(values)
      axios.post(`${baseUrl}/auth/signup`,values).then((data)=>{
        if(data.status==201){
          setLoading(false)
          notify('success','success')
          navigate('/login')
        }
      }).catch((error)=>{
        if(error.response.status==409){
          setLoading(false)
          notify(error.response.data.message,'error')
        }

      })

    }
  })
  return (
    <>
    <div className="w-50 m-auto my-5">
        <h2>Register Now</h2>
        <form onSubmit={registerFormik.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input onBlur={registerFormik.handleBlur} value={registerFormik.values.name} onChange={registerFormik.handleChange} type='text' className='form-control my-3' id='name' name='name'/>
            {registerFormik.errors.name && registerFormik.touched.name ?<div className="alert alert-danger">
              {registerFormik.errors.name}
            </div>:''}

            <label htmlFor='email'>Email</label>
            <input onBlur={registerFormik.handleBlur} value={registerFormik.values.email} onChange={registerFormik.handleChange} type='email' className='form-control my-3' id='email' name='email'/>
            {registerFormik.errors.email && registerFormik.touched.email?<div className="alert alert-danger">
              {registerFormik.errors.email}
            </div>:''}

            <label htmlFor='password'>Password</label>
            <input onBlur={registerFormik.handleBlur} value={registerFormik.values.password} onChange={registerFormik.handleChange} type='password' className='form-control my-3' id='password' name='password'/>
            {registerFormik.errors.password && registerFormik.touched.password?<div className="alert alert-danger">
              {registerFormik.errors.password}
            </div>:''}

            <label htmlFor='rePassword'>rePassword</label>
            <input onBlur={registerFormik.handleBlur} value={registerFormik.values.rePassword} onChange={registerFormik.handleChange} type='password' className='form-control my-3' id='rePassword' name='rePassword'/>
            {registerFormik.errors.rePassword && registerFormik.touched.rePassword ? <div className="alert alert-danger">
              {registerFormik.errors.rePassword}
            </div>:''}
            <button disabled={!(registerFormik.isValid&&registerFormik.dirty&&!loading)} className='btn text-white bg-main' type='submit'>
              {!loading?"Register":<i className='fas fa-spinner fa-spin'></i>}
            </button>

        </form>


    </div>
    
    
    </>
  )
}
