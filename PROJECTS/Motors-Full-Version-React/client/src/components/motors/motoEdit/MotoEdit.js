import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import './edit-motor.css';

import { SelectControl, MotoEDitForm } from '.././../';

import { editMotorAction, fetchMotorDetailsAction } from '../../../actions/motorsActions';
import { withAuthLogged, withUserOnly } from '../../../infrastructore/hocs';

import Valid from '../../../infrastructore/valid';

class MotoEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            model: '',
            image: '',
            price: '',
            description: '',
            creator: null,
            likes: null,
            city: '',
            isBanned: null,
            ready: false
        }
    }

    handleSubmit = async (ev) => {
        ev.preventDefault();

        let data = {
            model: this.state.model,
            image: this.state.image,
            price: this.state.price,
            description: this.state.description,
            creator: this.state.creator,
            likes: this.state.likes,
            city: this.state.city,
            isBanned: this.state.isBanned
        }

        let err = Valid.filldsAreRequired({
            city: data.city,
            price: data.price,
            model: data.model,
            image: data.image,
            description: data.description,
        }); if (err) return toastr.error(`${err} is required!`)

        let errs = await Valid.motor(
            data.city,
            data.price,
            data.model,
            data.image,
            data.description,
        ); if (errs) return toastr.error(errs)

        try {
            await this.props.editMotor(data, this.props.match.params.id, 'motors');
            toastr.success('Motor has been edited successful!')
            this.props.history.push('/catalog')
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount = async () => {

        try {
            await this.props.motorDetails(this.props.match.params.id, 'motors');

            this.setState({
                model: this.props.details.model,
                image: this.props.details.image,
                price: this.props.details.price,
                description: this.props.details.description,
                creator: this.props.details.creator,
                likes: this.props.details.likes,
                city: this.props.details.city,
                isBanned: this.props.details.isBanned,
            });
        } catch (e) {
            console.log(e);
        }
    }

    handleChange = ev => {
        let name = ev.target.name;
        let value = ev.target.value
        this.setState({
            [name]: value
        });
    }

    render() {

        return (
            <div id="edit-motor">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="bs-component">
                            <form onSubmit={this.handleSubmit}>
                                <legend>City</legend>
                                <SelectControl {...this.state} handleChange={this.handleChange} />
                                <MotoEDitForm handleChange={this.handleChange}  {...this.state} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

MotoEdit = withAuthLogged(MotoEdit)
MotoEdit = withUserOnly(MotoEdit)

function mapDispatchToProps(dispatch) {
    return {
        editMotor: (data, id, collection) => dispatch(editMotorAction(data, id, collection)),
        motorDetails: (id, collection) => dispatch(fetchMotorDetailsAction(id, collection))
    }
}

function mapStateToProps(state) {
    return {
        data: state.motor,
        details: state.motorDetails
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MotoEdit);
