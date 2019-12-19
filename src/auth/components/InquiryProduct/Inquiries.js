import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getAllInquiries} from '../../api';
import Inquiry from './Inquiry';

class Inquiries extends Component{
    componentDidMount() {
        getAllInquiries()
        .then((response) => {
            console.log(response.inquiries)
                this.props.setInquiries(response.data.inquiries)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    render() {
        let allInquries = <h2>No Inquiries</h2>
        if (this.props.inquiries.length > 0) {
            allInquries = this.props.inquiries.map((inquiry, index) => {
                return <Inquiry 
                // user = {this.props.user}
                name={inquiry.name} 
                description={inquiry.description}
                id={inquiry._id} 
                key={index} 
                inquiry= {inquiry}
                />
            });
        }
        return allInquries;
    }
}

export default Inquiries;
