import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (role)=>{
  return (<React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
    {role === 'Admin' 
    ? <Link to="/add-product">Add Product</Link>
  :false
  }
   
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
    <h1>Shopping Website</h1>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions(user.userRole) : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
