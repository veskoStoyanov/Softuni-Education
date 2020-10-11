import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import SearchHotels from './SearchHotels';
import Hotel from './Hotel';

import './list-hotel.css';

import { fetchHotelAction } from '../../../actions/hotelActions'

import text from '../../../infrastructore/textDescription';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hotels: [],
        }
    }

    getHotels = async () => {
        toastr.success(text['hotels']);
        try {
            await this.props.fetchHotels('hotels');

            this.setState({
                hotels: this.props.data
            });
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount = () => this.getHotels()

    changeState = (hotels) => {
        this.setState({
            hotels
        })
    }

    render() {
        let noHotels = (<h1>No Hotels available!</h1>);

        return (
            <div id="list-hotel">
                <main role="main" id="catalog">
                    <div className="panel panel-default">
                        <div className="bs-component">
                            <SearchHotels changeState={this.changeState} />
                            {this.state.hotels.length === 0 ? noHotels : null}
                            <div className="panel-body">
                                <div className="row">
                                    {this.state.hotels.map(p => 
                                    <Hotel getHotels={this.getHotels} key={p._id} {...p} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchHotels: (collection) => dispatch(fetchHotelAction(collection))
    }
}

function mapStateToProps(state) {
    return {
        data: state.fetchHotels
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);





