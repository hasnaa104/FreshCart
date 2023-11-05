import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../utilities/BaseUrl";

export let StoreContext = createContext(0)

export default function StoreContextProvider({children}){
   let [count,setCount] = useState(0)
    
    function addToCart(token,productId){
        return axios.post(`${baseUrl}/cart`,{productId},{headers:{token}})
        .then(data => data)
        .catch(error => error)
    }
    function getUserCart(token){
        return axios.get(`${baseUrl}/cart`,{headers:{token}})
        .then(data => data)
        .catch(error => error)
    }
    function removeCartItem(token,productId){
        return axios.delete(`${baseUrl}/cart/${productId}`,{headers:{token}})
        .then(data => data)
        .catch(error => error)
    }
    function updateQty(token,productId,count){
        return axios.put(`${baseUrl}/cart/${productId}`,{count},{headers:{token}})
        .then(data => data)
        .catch(error => error)
    }
    function getCartCount(){
        let token = localStorage.getItem('token')
        axios.get(`${baseUrl}/cart`,{headers:{token}})
        .then(data =>{
            console.log(data.data.numberOfCartItems)
            setCount(data.data.numberOfCartItems)

        })
        .catch(error => {
            console.log(error)
        }
            )
    }

    function onlinePayment(cartId,shippingAddress){
        return axios.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
        {shippingAddress},
        // {headers:headers}
        )
        .then(data=>data)
        .catch(error=>error)
    }

    useEffect(()=>{
        getCartCount()

    },[])
    
    return <StoreContext.Provider value={{addToCart,getUserCart,removeCartItem,updateQty,getCartCount,count,onlinePayment}}>
        {children}
    </StoreContext.Provider>
}