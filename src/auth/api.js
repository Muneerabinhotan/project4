import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = credentials => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    }
  })
}

export const signIn = credentials => {
  return axios({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}

export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    }
  })
}

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  })
}

////////////

/*
*                 Product
*/
export const addProduct = (user, product) => {
  return axios({
    url: apiUrl + '/api/products',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    
      product: {
        name: product.name,
        description: product.descrition,
        price: product.price,
        user: user._id
      }
    
  })
}

// Get all Products
export const getAllProducts = function () {
  return axios.get(`${apiUrl}/api/products`);
}

// Delete Product By ID
export const deleteProductById = function (id) {
  return axios.delete(`${apiUrl}/api/products/${id}`);
}


/*
*                 Order
*/
export const addOrder = (user, order) => {
  return axios({
    url: apiUrl + '/api/orders',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
 
      order: {
        user: user._id,
        products: order,
       
      }
      
  })
}
// Get all Orders
export const getAllOrders = () => {
  return axios({
    url: apiUrl + '/api/orders',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
// Delete Order By ID
export const deleteOrderById = function (id) {
  return axios.delete(`${apiUrl}/api/orders/${id}`);
}
