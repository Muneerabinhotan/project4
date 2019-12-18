import React, { Component } from 'react';
import { getAllOrders } from '../../api';

class Order extends Component{

    state ={
        orders: []
    }
    componentDidMount(){
        getAllOrders(this.props.user).then((res)=> {
            console.log(res.data)

            this.setState({orders: res.data.orders}
            
            )})
    }
    deleteOrders = (e) => {
        e.preventDefault();
        this.props.deleteOrder(this.props.id);
    };
    render() {
        console.log(this.state.orders);
        
        return (
            <div className='order'>
                <h1>Order</h1>
                {/* <h2>{this.props.user}</h2>
                <p>{this.props.products}</p>
               
                <a href='/orders' onClick={this.deleteOrders}>Delete Order</a> */}
            </div>
        );
    }
}



export default Order;