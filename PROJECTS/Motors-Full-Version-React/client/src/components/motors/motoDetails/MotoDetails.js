import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { Like, BanBtn } from '../../';

import './motor-details.css';

import { fetchMotorDetailsAction } from '../../../actions/motorsActions'
import { withAuthLogged } from '../../../infrastructore/hocs';

import Auth from '../../../infrastructore/auth';
import text from '../../../infrastructore/textDescription';

class MotoDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            city: null,
            image: null,
            model: null,
            price: null,
            description: null,
            creator: null,
            likes: [],
            id: null,
            isAdmin: Auth.isUserAdmin(),
            userId: sessionStorage.getItem('userId'),
            ready: false,
        }
    }

    getMotoDetails = async () => {
        toastr.success(text['motoDetails'])

        try {
            await this.props.motorDetails(this.props.match.params.id, `motors`);

            let res = this.props.data
            this.setState({
                city: res.city,
                image: res.image,
                model: res.model,
                price: res.price,
                description: res.description,
                id: res._id,
                creator: res.creator,
                ready: true,
                likes: res.likes,
            });

        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount = () => this.getMotoDetails()

    render() {
        let url = '/like/' + this.state.id;;
        let link = `/maps/${this.state.city}`;

        return (
            <div id="motor-details">
                <div className="card-footer text-muted">
                </div>
                <div className="container w-50 mt-5 card mb-3">
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
                                <Link to={link} className="btn btn-outline-primary">
                                    {this.state.city}
                                </Link> 
                            </h5>
                        </li>
                        <li className="list-group-item">
                            <Link to={`/hotels`} className="btn btn-outline-primary first-btn">
                                See hotels in {this.state.city}
                            </Link>
                            <Link to={`getWeather/${this.state.city}`} className="btn btn-outline-primary second-btn">
                                See the weather in {this.state.city}
                            </Link>
                        </li>
                    </ul>
                </div>
                {this.state.isAdmin ? <BanBtn history={this.props.history} {...this.state} /> : null}

                {this.state.isAdmin ? null : 
                <Like url={url} 
                      getMotoDetails={this.getMotoDetails} 
                      motoId={this.props.match.params.id} 
                      userId={this.state.userId} 
                      likes={this.state.likes} />
                }

                <div className="card-footer text-muted">
                </div>
            </div>
        )
    }
}

MotoDetails = withAuthLogged(MotoDetails)

function mapDispatchToProps(dispatch) {
    return {
        motorDetails: (id, collection) => dispatch(fetchMotorDetailsAction(id, collection))
    }
}

function mapStateToProps(state) {
    return {
        data: state.motorDetails,
        store: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MotoDetails);



