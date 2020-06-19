import React, { Component } from 'react';
import toastr from 'toastr';

import motors from '../../../infrastructore/motors'

import { MotoCreateForm } from '../../';

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

    handleSubmit = async (ev) => {
        ev.preventDefault();

        let data = {
            model: this.state.model,
            description: this.state.description,
            price: this.state.price,
            image: this.state.image,
            city: this.state.city,
            userId: sessionStorage.getItem('userId'),
            token: sessionStorage.getItem('token'),
            _id: (motors.length + 1).toString()
        }

            if(data['model'] === '' || data['model'] === '' || data['model'] === '' || data['model'] === '' ||
            data['model'] === '' || data['model'] === '') {
                return toastr.error('All fields are required')
            }
                     
            await motors.push(data)
           
                toastr.success('Motor has been created!')
                this.props.history.push('/catalog')
            

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


export default MotoCreate

