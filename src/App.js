import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import Products from './auth/components/ProductComponent/Products'
import AddProduct from './auth/components/ProductComponent/AddProduct'
import UpdateProduct from './auth/components/ProductComponent/UpdateProduct'
import Inquries from './auth/components/InquiryProduct/Inquiries'
import AddInquiry from './auth/components/InquiryProduct/AddInquiry'
import Order from './auth/components/OrderComponent/Order'
import Inquiries from './auth/components/InquiryProduct/Inquiries'

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: null,
      alerts: [],
      products: [],
      inquiries: [],
      productIds: [],
      cart:[]

    }
  }
setProductId = (id) =>{
  this.setState({ productIds: [...this.state.productIds, id] })
}
  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  setProducts = (products) => {
    this.setState({ products: products });
  }

  setAddProducts = (addProduct)=>{
    this.setState({addProduct:addProduct})
  }

  setInquiries = (inquiries) =>{
    this.setState({ inquiries: inquiries})
  }

  setAddInquiries = (addInquiry) =>{
    this.setState({ addInquiry: addInquiry})
  }

  setOrders = (orders) => {
    this.setState({ orders: orders });
  }

  render() {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        <main className="container">
          <Route  path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
            
          )} />
          <Route path='/home' render={() => ( // Products Path
            <Products products={this.state.products}
            setProducts={this.setProducts} user={user} setProductId={this.setProductId}/>
            )} />

          <Route path='/inquiries' render={() => ( // Inquiries Path
             <Inquiries inquiries={this.state.inquiries}
              setInquiries={this.setInquiries} user={user}/>
               )} />
            
            <AuthenticatedRoute exact path="/add-product" user={user} render={() => (
              (user.userRole === 'Admin') ?
              <AddProduct setProducts={this.state.setProducts}
                setAddProducts={this.setAddProducts} user={user} alert={this.alert} />
                : false
            )} />
          <AuthenticatedRoute exact path="/add-inquiry" user={user} render={() => (
              (user.userRole === 'Customer') ?
              <AddInquiry inquiries={this.state.inquiries}
              setInquiries={this.setInquiries} user={user}/>
              : false )} />

            <AuthenticatedRoute user={user} path='/update-product' render={(props) => (
             <UpdateProduct {...props}  setAddProducts={this.setAddProducts} alert={this.alert} user={user} />
            
          )} />




          <Route  path='/order' render={() => ( // Orders Path
            <Order productIds={this.state.productIds} user={user}
               />
          )} />


        </main>

      </React.Fragment>
    )
  }
}

export default App
