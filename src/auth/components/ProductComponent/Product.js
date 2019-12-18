import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
                <img src={this.props.image} alt="Logo" />

                
                {this.props.user ?
                this.props.user.userRole === 'Admin' ?
                
                <Link
                    to={{
                        pathname: "/update-product",
                        state: { info: this.props.product }
                    }}
                    >
                Update Product</Link>
                : false
            :false}
                {this.props.user ?
                this.props.user.userRole === 'Admin' ?
                <a href='/home' onClick={this.deleteProducts}>Delete Product</a>
                : false
            :false}
            </div>
        );
    }
}



export default Product;