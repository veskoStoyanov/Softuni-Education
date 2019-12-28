import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../../../style/bot.css';

import { Moto } from '../../';

import { withAuthLogged } from '../../../infrastructore/hocs';
import { fetchMotorAction } from '../../../actions/motorsActions'
import Auth from '../../../infrastructore/auth';



class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: Auth.getUsername(),
            image: sessionStorage.getItem('image'),
            userId: sessionStorage.getItem('userId'),
            motors: [],
            isAdmin: Auth.isUserAdmin(),
        }
    }

    getOwnMotos = async () => {

        try {
            await this.props.fetchMotors('motors')
            let motors = [];

            if (this.state.isAdmin) {
                motors = this.props.data.filter(m => m.isBanned)

            } else {
                motors = this.props.data.filter(m => m.creator.toString() === this.state.userId.toString());
            }

            this.setState({
                motors,
            });

        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount = () => this.getOwnMotos();

    render() {
        let messageBtn = (<Link to='/list/contacts' ><button className="btn btn-secondary">Messages</button></Link>);
        let reservationBtn = (<Link to='/reservation' ><button className="btn btn-secondary">Reservations</button></Link>);
        return (<div className='bot' >
            <h1 className="my-4">My Profile
        </h1>
            <div className="row">
                <div className="col-md-8">
                    <img className="img-fluid img" src={this.state.image}
                        alt="profilePic" />
                </div>
                <div className="col-md-4 text-center name">
                    <h3 className=" badge-pill badge-success">{this.state.username}</h3>
                    {this.state.isAdmin ? messageBtn : reservationBtn}
                </div>
            </div>
            <h3 className="text-center title">{this.state.isAdmin ? 'Banned Motors' : 'Owned Motors'}</h3>
            <ul className="list-group">
                {this.state.motors && this.state.motors.map(m => <Moto key={m._id} {...m}
                    getOwnMotos={this.getOwnMotos}
                    isAdmin={this.state.isAdmin}
                />)}
            </ul>
        </div>)
    }
}

Profile = withAuthLogged(Profile);

function mapDispatchToProps(dispatch) {
    return {
        fetchMotors: (collection) => dispatch(fetchMotorAction(collection))
    }
}

function mapStateToProps(state) {
    return {
        data: state.motor
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);