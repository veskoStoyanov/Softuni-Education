import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../../style/post.css';
import '../../../style/bot.css'

import SearchHotels from './SearchHotels';
import Hotel from './Hotel';

import { fetchHotelAction } from '../../../actions/hotelActions'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hotels: [],
        }
    }

    getHotels =async () => {
        try {
            await this.props.fetchHotels('hotels');

            this.setState({
                hotels: this.props.data
            });

        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount = () =>  this.getHotels()

    changeState = (hotels) => {
        this.setState({
            hotels
        })
    }

    render() {

        let noHotels = (<h3 >No Hotels available!</h3>);

        return (<section className='bot' id="viewCatalog">
            <h1 className="text-center">Hotels</h1>
            {this.state.hotels.length === 0 ? noHotels : null}

            <SearchHotels changeState={this.changeState} />

            <div className="mt-3">
                <div className="row ">
                    <div className="card-deck d-flex justify-content-center">

                        {this.state.hotels.map(p => <Hotel getHotels={this.getHotels} key={p._id} {...p} />)}

                    </div>
                </div>
            </div>
        </section>)
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





