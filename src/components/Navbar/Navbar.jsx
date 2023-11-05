import React, { useContext } from 'react'
import logo from '../../images/freshcart-logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

export default function Navbar() {
  let {count} = useContext(StoreContext)
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-main-light navbar-light">
  <div className="container">
    <NavLink className="navbar-brand" to="/">
        <img src={logo} alt=''/>
    </NavLink>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Categories</NavLink>
        </li>
        
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-2">
       
        
       <Link to='/cart' type="button" className="btn position-relative me-2 border-0">Cart<i className="fa-solid fa-cart-shopping" />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{count}
    <span className="visually-hidden">unread messages</span>
  </span>
</Link>

        <li className="nav-item">
          <NavLink className="nav-link" to="/">Logout</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
