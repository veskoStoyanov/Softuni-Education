import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { Moto } from '../../';

import './profile.css';

import { withAuthLogged } from '../../../infrastructore/hocs';
import { fetchMotorAction } from '../../../actions/motorsActions';

import Auth from '../../../infrastructore/auth';
import text from '../../../infrastructore/textDescription';

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
        toastr.success(text['profile']);
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

        return (
            <div id="profile">
                <div className="profile-div">
                    <h1 className="text-center">{this.state.isAdmin ? messageBtn : reservationBtn}</h1>
                    <h1 className="text-center header">Profile {this.state.username}</h1>
                </div>
                <div >
                    <div width="200px" height="200px" className="card mb-3 img">
                        <img width="150px" height="150px" src={this.state.image} alt="Cardimage" />
                    </div>
                    <ul className="list-group">
                        <h3 className="text-center title">{this.state.isAdmin ? 'Banned Motors' : 'Owned Motors'}</h3>
                        {this.state.motors && this.state.motors.map(m => <Moto key={m._id} {...m}
                            getOwnMotos={this.getOwnMotos}
                            isAdmin={this.state.isAdmin}
                        />)}
                    </ul>
                </div>
            </div>
        )
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