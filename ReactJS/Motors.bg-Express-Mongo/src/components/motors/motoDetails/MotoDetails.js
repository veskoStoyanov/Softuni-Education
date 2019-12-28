import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Auth from '../../../infrastructore/auth';

import '../../../style/sitee.css';
import '../../../style/moto.css';
import '../../../style/bot.css';

import { Like, BanBtn } from '../../';
import {fetchMotorDetailsAction} from '../../../actions/motorsActions'
import { withAuthLogged } from '../../../infrastructore/hocs';

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

        let url = '/like/' + this.state.id;
        let link = `/maps/${this.state.city}`
      
            return (<div className=" text-center motoo bot">
                <div className="card-header">
                    Price: {this.state.price}
                </div>
                <div className="card-body">
                    <img alt='fotoImg' className="hotelImg" src={this.state.image} />
                    <h5 className="card-title">{this.state.model}</h5>
                    {this.state.isAdmin ? <BanBtn history={this.props.history} {...this.state} /> : null}
                    <p className="card-text">Location: <Link to={link} className="btn btn-outline-primary">{this.state.city}</Link></p>
                    <Link to={`getWeather/${this.state.city}`} className="btn btn-outline-primary">See the weather in {this.state.city}</Link>
                <p> <Link to={`/hotels`} className="btn btn-outline-primary">See if there is a hotel available in {this.state.city}</Link></p>
                </div>
                <div className="card-footer text-muted">
                    {this.state.description}
                </div>
                {this.state.isAdmin ? null : <Like url={url} getMotoDetails={this.getMotoDetails} motoId={this.props.match.params.id} userId={this.state.userId} likes={this.state.likes} />}
            </div>)
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



