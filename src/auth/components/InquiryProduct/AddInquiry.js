import React, { Component } from "react";
import { addInquiry } from '../../api'
class AddInquiry extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
           
        }
    }
    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })
    onAddInquiry = event => {
        event.preventDefault()

        const { alert, history, user } = this.props
        //API Create Methods Here

        addInquiry(this.state, this.props.user)

            .then((response) => {
                console.log(response.data)
            })


            .catch(error => {
                console.log(error)
                this.setState({
                    name: '',
                    description: '',
                })

                alert('There is a problem');
            })
    }

    render() {
        const { name, description } = this.state

        return (
            <form className='auth-form' onSubmit={this.onAddInquiry}>
                <h3>Add Inquiry</h3>
                <label htmlFor="inquiry-title">Title:</label>
                <input
                    required
                    name="name"
                    value={name}
                    type="text"
                    placeholder="The Title Name"
                    onChange={this.handleChange}
                />

                <label htmlFor="description">Description</label>
                <input
                    required
                    name="description"
                    value={description}
                    type="text"
                    placeholder="Describe The Title"
                    onChange={this.handleChange}
                />

                <button type="submit">Add Inquiry</button>
            </form>
        )
    }
}
export default AddInquiry;