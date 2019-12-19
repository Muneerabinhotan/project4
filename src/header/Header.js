import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (role)=>{
  return (<React.Fragment>
    {role === 'Admin' 
    ? <Link to="/add-product">Add Product</Link>
  : <Link to="/add-inquiry">Add Inquiry</Link>
  }
 {role === 'Admin' 
    ? <Link to="/inquiries">Inquiries</Link>
  : false
  }
  
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
   
  </React.Fragment>
  )}

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/home">Home Page</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
  {/* <img className="image" src={"https://cdn3.vectorstock.com/i/1000x1000/81/67/diamond-jewelry-luxury-icon-on-white-background-vector-28078167.jpg"} height="100" width="100" alt="Logo" /> */}
    <h1>Trend Spotter</h1>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions(user.userRole) : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
