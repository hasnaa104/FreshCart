import React from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import MainLayout from './components/Layouts/MainLayout'
import HomePage from './components/Pages/HomePage'
import Products from './components/Products/Products'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { ToastContainer} from 'react-toastify';
import StoreContextProvider from './context/StoreContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
 

export default function App() {
  let routes = createBrowserRouter([
    {path:'/' ,
     element:<MainLayout/>,
    children:[
      {index:'true',element:<HomePage/>},
      {path:'products',element:<Products/>},
      {path:'product-details/:id',element:<ProductDetails/>},
      {path:'login',element:<Login/>},
      {path:'register',element:<Register/>},
      {path:'cart',element:<Cart/>},
      {path:'checkout',element:<Checkout/>},
    ]}
  ]) 



  return (

    <>
    <ToastContainer theme='colored'/>
    
    <StoreContextProvider>
    <RouterProvider router={routes}/>
    </StoreContextProvider>
   
    </>
  )
}
