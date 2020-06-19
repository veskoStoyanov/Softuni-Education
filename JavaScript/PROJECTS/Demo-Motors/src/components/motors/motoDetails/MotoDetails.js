import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './motor-details.css';

import motors from '../../../infrastructore/motors';



class MotoDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            city: null,
            image: null,
            model: null,
            price: null,
            description: null,
            id: null,
        }
    }

    getMotoDetails = async () => {

        try {
            let id = this.props.match.params.id;
            let res = motors.filter(x => x._id === id)[0]
            
            this.setState({
                city: res.city,
                image: res.image,
                model: res.model,
                price: res.price,
                description: res.description,
                id: res._id,

            });

        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount = () => this.getMotoDetails()

    render() {

        return (
            <div id="motor-details">
                <div className="card-footer text-muted">
                </div>
                <div className="container mt-5 card mb-3">
                    <h3 className="card-header">{this.state.model}</h3>
                    <img className="thumbnail" src={this.state.image} alt="motoPic" />
                    <div className="card-body">
                        <p className="card-text">
                            {this.state.description}
                        </p>
                    </div>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <h5>Price: </h5>
                            <span >{this.state.price}$</span>
                        </li>
                        <li className="list-group-item"> 
                            <h5>City:                              
                                    {this.state.city}                          
                            </h5>
                        </li>
                    </ul>
                </div>
            
                <Link to="#" className="btn btn-outline-danger a-btn">Like it!</Link>

                <div className="card-footer text-muted">
                </div>
            </div>
        )
    }
}


export default MotoDetails



