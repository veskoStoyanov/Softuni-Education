import React, { Component } from 'react';
import { connect } from 'react-redux';

import toastr from 'toastr';

import '../../../style/bot.css';

import {SelectControl, HotelForm, PanelHotel} from '../../';

import {fetchHotelAction, createHotelAction} from '../../../actions/hotelActions';
import Valid from '../../../infrastructore/valid';
import {withAuthAdmin} from  '../../../infrastructore/hocs';

class Panel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hotels: [],
            name: '',
            price: '',
            city: '',
            image: ''
        }
    }

    getHotels = async () => {
        try {
           await this.props.fetchHotels('hotels')
            this.setState({
                hotels: this.props.data
            });

        } catch (e) {
            console.log(e);

        }
    }

    componentDidMount = async () => this.getHotels()

    handleSubmit = async (ev) => {
        ev.preventDefault();

        let data = {
            name: this.state.name,
            price: this.state.price,
            image: this.state.image,
            city: this.state.city,
        }

        try {

            let err = Valid.filldsAreRequired({
                name: this.state.name,
                price: this.state.price,
                image: this.state.image,
                city: this.state.city,
            }); if (err) return toastr.error(`${err} is required!`)

            let errs = await Valid.hotel(this.state.city, this.state.price, this.state.name, this.state.image);
            if (errs) return toastr.error(errs);

            await this.props.createHotel(data, 'hotels')

            toastr.success('Hotel was created!')
            this.props.history.push('/hotels')

        } catch (e) {
            toastr.error('Something went wrong with Hotel Create!')
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
            <main className='bot'>

                <form onSubmit={this.handleSubmit} className="text-center border border-light p-5">
                    <h1>Is there new Hotel? Add it now!</h1>

                    <SelectControl handleChange={this.handleChange} />

                    <HotelForm handleChange={this.handleChange} />

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                <h2 className="text-center">There are hotels available!</h2>

                <ul className="list-group">

                    {this.state.hotels.map(any => <PanelHotel key={any._id}
                        {...any}
                        getHotels={this.getHotels}
                    />)}

                </ul>
            </main>
        )
    }
}
Panel = withAuthAdmin(Panel)

function mapDispatchToProps(dispatch) {
    return {
        fetchHotels: (collection) => dispatch(fetchHotelAction(collection)),
        createHotel: (data, collection) => dispatch(createHotelAction(data, collection))
    }
}

function mapStateToProps(state) {
    return {
        data: state.fetchHotels
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);