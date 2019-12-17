import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { getAllProducts } from '../../api';

class Product extends Component{
    constructor(){
        super()
        this.state = {
            addProduct: false,
            addProductForm: false
        }
    }
    deleteProduct = (e) =>{
        e.preventDefault();
        this.props.deleteProduct(this.props.id)
    }
    
    showProduct = (e) => {
        customerProduct(this.props.user, this.props.id)
        .then((result) => {
            this.props.setProductList(result.product)
            this.setState({ addProduct : true })

        })
        .catch((error) => {
            console.log(error)

        })
    }

    displayProductForm(id, user){
        this.setState({ addProductForm: true })
    }

    render(){
        const user = this.props.user;
        const id = this.props.id;
        let displayProductForm = "";
        if(this.state.addProduct == true) displayProductForm = <button onClick {() => {displayProductForm(id,user)}}>Add Product</button>
            return(
                <div className="product / work on it" onClick={this.showProduct}>
                    <h2 onClick={this.showProduct}>{this.props.name}</h2>
                    <a href="#" onClick={this.deleteProduct}>Delet Product</a>
                    {displayProductForm}
                    {this.state.addProductForm && <Redirect to {{
                        pathname: 'add/product',
                        state: {id: this.props.id}
                    }} 
                    />}

                </div>
            );
    }


}

export default withRouter (Product)