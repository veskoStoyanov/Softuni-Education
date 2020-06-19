import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { MotoCreateForm } from '../../';

import { withAuthLogged, withUserOnly } from '../../../infrastructore/hocs';
import { createMotorAction } from '../../../actions/motorsActions'

import Valid from '../../../infrastructore/valid';
import text from '../../../infrastructore/textDescription';

class MotoCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: '',
            model: '',
            description: '',
            price: '',
            city: '',
        }
    }

    componentDidMount() {
        toastr.success(text['addMoto']);
    }

    handleSubmit = async (ev) => {
        ev.preventDefault();

        let data = {
            model: this.state.model,
            description: this.state.description,
            price: this.state.price,
            image: this.state.image,
            city: this.state.city,
            userId: sessionStorage.getItem('userId'),
            token: sessionStorage.getItem('token')
        }

        try {

            let err = Valid.filldsAreRequired({
                city: this.state.city,
                price: this.state.price,
                model: this.state.model,
                image: this.state.image,
                description: this.state.description,
            }); if (err) return toastr.error(`${err} is required!`)

            let errs = await Valid.motor(this.state.city, this.state.price, this.state.model, this.state.image, this.state.description);
            if (errs) return toastr.error(errs);

            await this.props.createMotor(data, 'motors')
            if (this.props.isCreated) {
                toastr.success('Motor has been created!')
                this.props.history.push('/catalog')
            }

        } catch (e) {
            toastr.error('Something went wrong with Motor Creation!')
            console.log(e);
        }
    }

    handleChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }

    render() {
        return (
            <MotoCreateForm
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                city={this.state.city} />
        )
    }
}

MotoCreate = withAuthLogged(MotoCreate)
MotoCreate = withUserOnly(MotoCreate)


function mapDispatchToProps(dispatch) {
    return {
        createMotor: (data, collection) => dispatch(createMotorAction(data, collection))
    }
}

function mapStateToProps(state) {
    return {
        isCreated: state.createMotor
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MotoCreate);

