import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Product extends Component{

    deleteProducts = (e) => {
        e.preventDefault();
        this.props.deleteProduct(this.props.id);
    };

    setProductId = (e) => {
        console.log('setProductId', this.props.id)
        e.preventDefault();
        this.props.setProductId(this.props.id);
    };
    render() {
        return (
            <div className='productsContainer'> 
                <img className="image" src={this.props.image} height="320" width="250" alt="item" />
                <h6 className="titles"> <strong>Name:</strong><br/>{this.props.name}</h6>

                <p className="titles"><strong>Description:</strong><br/>
                {this.props.description}</p>
                <p className="titles" >
                    <strong>Price: $</strong>{this.props.price}
                </p>
                {this.props.user ?
                this.props.user.userRole === 'Admin' ?
                <Link className="btn btn-dark bttn" to={{
                    pathname: "/update-product",
                    state: { info: this.props.product }
                }}> Update Product</Link>
                :false
                :false}

                {this.props.user ?
                this.props.user.userRole === 'Admin' ?
                <button className="btn btn-dark bttn" onClick={this.deleteProducts}>Delete Product</button>
                :false
                // : <button className="btn btn-dark bttn" onClick={this.setProductId} > Add to Cart</button>
            :false}
            </div>
        );
    }
}



export default Product;