import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getAllProduct, deleteProductById } from '../../api';
import Product from './Product';

class Products extends Component{
    componentDidMount() {
        getAllProduct()
        .then((response) => {
            console.log(response.products)
                this.props.setProducts(response.data.products)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    deleteProduct = (id) => {
        deleteProductById(id)
            .then((response) => {
                const newProduct = this.props.products.filter((product) => {
                    return product._id !== id;
                });
                this.props.setProducts(newProduct);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        console.log(this.props.user)
        let allProducts = <h2>No Products</h2>
        if (this.props.products.length > 0) {
            allProducts = this.props.products.map((product, index) => {
                return <Product 
                user = {this.props.user}
                name={product.name} 
                description={product.description}
                price={product.price}
                image={product.image}
                id={product._id} 
                deleteProduct={this.deleteProduct} 
                key={index} 
                product={product}
                setProductId= {this.props.setProductId}
                />
            });
        }
        return allProducts;
    }
}

export default Products;
