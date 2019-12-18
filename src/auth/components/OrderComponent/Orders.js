// import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import { addOrder, getAllOrders, deleteOrderById } from '../../api';
// import Order from './Order';

// class Orders extends Component{
//     componentDidMount() {
//         getAllOrders()
//         .then((response) => {
//             console.log(response.orders)
//                 this.props.setOrders(response.data.orders)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }

//     deleteOrder = (id) => {
//         deleteOrderById(id)
//             .then((response) => {
//                 const newOrder = this.props.orders.filter((order) => {
//                     return order._id !== id;
//                 });
//                 this.props.setOrders(newOrder);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }

//     addOrder(id){
//         return <Redirect to={{
//             pathname: '/add-order',
//             state: { id: id}
//             }}
//         />
//     }
//     render() {
//         let allOrders = <h2> You Have No Orders </h2>
//         if(this.props.orders.length > 0) {
//             allOrders = this.props.orders.map((order, index) => {
//                 return <Order 
//                 user={order.user} 
//                 products={order.products}
//                 id={order._id} 
//                 deleteOrder={this.deleteOrder} 
//                 key={index} 
//                 />
//             });
//         }
//         return allOrders;
//     }
// }

// export default Orders;
