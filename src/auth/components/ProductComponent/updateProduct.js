import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { editProductById } from '../../api'


class UpdateProduct extends Component{
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            price: '',
            image: ''
        }
    }

    componentDidMount(){
        const {info} = this.props.location.state
    this.setState({
            name: info.name,
            description: info.description,
            price: info.price,
            image: info.image,
            id: info._id
        })
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
      })
    
      onUpdateProduct = event => {
        event.preventDefault()
    
        const { alert, history, user } = this.props

        editProductById( this.state, this.props.user )
         
        .then((response) => {
            console.log(response.data)
        })


        .catch(error => {
            console.log(error)
            this.setState({
                name: '',
                description: '',
                price: '',
                image:'image'
            })

            alert('There is a problem');
        })
}

render() {
    const { name, description, price, image } = this.state
    console.log(this.props);
    
    return (
        <form className='auth-form' onSubmit={this.onUpdateProduct}>
            <h3>Edit A Product</h3>
            <label htmlFor="product-name">Product Name</label>
            <input
                required
                name="name"
                value={name}
                type="text"
                placeholder="The Product Name"
                onChange={this.handleChange}
            />

            <label htmlFor="description">Description</label>
            <input
                required
                name="description"
                value={description}
                type="text"
                placeholder="Describe The Product"
                onChange={this.handleChange}
            />

            <label htmlFor="price">Price</label>
            <input
                required
                name="price"
                value={price}
                type="text"
                placeholder="$$"
                onChange={this.handleChange}
            />

            <label htmlFor="image">Image</label>
            <input
                required
                name="image"
                value={image}
                type="text"
                placeholder="Add a Picture"
                onChange={this.handleChange}
            />
            <button type="submit">Edit The Product</button>
        </form>
    )
}
}
export default UpdateProduct;
