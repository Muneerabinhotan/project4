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
export const addProduct = ( product,user) => {
  return axios({
    url: apiUrl + '/api/products',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data:{
      product: {
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        user: user._id
        // product: product
      }
    }
  })
}

// Get all Products
export const getAllProduct = function () {
  return axios.get(`${apiUrl}/api/products`);
}

// Delete Product By ID
export const deleteProductById = function (id) {
  return axios.delete(`${apiUrl}/api/products/${id}`);
}
// Edit Product By ID
export const editProductById = function (product,user) {
  console.log("it works");
  
  return axios({
    url: `${apiUrl}/api/products/${product.id}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      product: {
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        user: user._id
      }
    }
  })

}


/*
*                 Inquiries
*/
// Add inquiry
export const addInquiry = ( inquiry,user) => {
  return axios({
    url: apiUrl + '/api/inquiries',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data:{
      inquiry: {
        name: inquiry.name,
        description: inquiry.description,
        user: user._id,
        inquiry: inquiry
      }
    }
  })
}

// Get all Inquiries
export const getAllInquiries = function () {
  return axios.get(`${apiUrl}/api/inquiries`);
}



//  FUTURE DEVELOPMENT
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
    data:{
      order: {
        user: user._id,
        products: order,
       
      }
    }
  })
}
// Get all Orders
export const getAllOrders = (user) => {
  console.log(user);
  return axios({
    url: apiUrl + '/api/orders',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      userId: user._id
    }
  })
}
// Delete Order By ID
export const deleteOrderById = function (id) {
  return axios.delete(`${apiUrl}/api/orders/${id}`);
}
