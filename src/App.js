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
import Order from './auth/components/OrderComponent/Order'
import UpdateProduct from './auth/components/ProductComponent/UpdateProduct'

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: null,
      alerts: [],
      products: [],
      productIds: []

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
          <Route path='/sign-up' render={() => (
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
            
            <AuthenticatedRoute exact path="/add-product" user={user} render={() => (
              (user.userRole === 'Admin') ?
              <AddProduct setProducts={this.state.setProducts}
                setAddProducts={this.setAddProducts} user={user} alert={this.alert} />
                :  <Products products={this.state.products}
                setProducts={this.setProducts} user={user} setProductId={this.setProductId}/>
            )} />
            
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
