import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import { getAllProducts } from '../../api';

class Product extends Component{

    deleteProducts = (e) => {
        e.preventDefault();
        this.props.deleteProduct(this.props.id);
    };
    render() {
        return (
            <div className='product'>
                <h2>{this.props.name}</h2>
                <sub>{this.props.description}</sub>
                <p>
                    {this.props.price}
                </p>
                <a href='/' onClick={this.deleteProducts}>Delete Product</a>
            </div>
        );
    }
}



export default Product;