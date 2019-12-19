import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Inquiry extends Component{

    render() {
        return (
            <div className='inquiriesContainer'> 
                
                <h6 className="titles"> <strong>Title:</strong><br/>{this.props.name}</h6>

                <p className="titles"><strong>Description:</strong><br/>
                {this.props.description}</p>
                            </div>
        );
    }
}



export default Inquiry;