import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Motor, Search, SortBtn} from '../../';

import '../../../style/post.css';
import '../../../style/bot.css'

import withAuthLogged from '../../../infrastructore/hocs/withAuthLogged';
import {fetchMotorAction} from '../../../actions/motorsActions'

class Catalog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortedPosts: [],
            sortBy: 'Sort-By',
        }
    }

    componentDidMount = async () => {
        try {
            await this.props.fetchMotors('motors');

            let sortedPosts = this.props.data.filter(m => !m.isBanned)

            this.setState({
                sortedPosts,
                ready: true
            });

        } catch (e) {
            console.log(e);
        }
    }

    handleSubmit = async (any, ev) => {

        let posts = this.state.sortedPosts;

        let sortedPosts = [];
        let sortBy = any.slice(1);

        if (sortBy === 'Price-highest') {
            sortedPosts = posts.sort((a, b) => b['price'] - a['price'])
        } else if (sortBy === 'Price-lowest') {
            sortedPosts = posts.sort((a, b) => a['price'] - b['price'])
        } else if (sortBy === 'Most-likes') {
            sortedPosts = posts.sort((a, b) => b['likes'].length - a['likes'].length)
        } else if (sortBy === 'Alphabetical') {
            sortedPosts = posts.sort((a, b) => a['model'].localeCompare(b['model']))
        }

        this.setState({
            sortedPosts,
            sortBy
        });
    }

    changeState = (data) => {
        this.setState({
            sortedPosts: data
        });
    }

    render() {

        let noMoto = (<h3 >No motors available. Create one!</h3>);

            return (<section className='bot' id="viewCatalog">
                <h1 className="text-center">Motors</h1>
                {this.state.sortedPosts.length === 0 ? noMoto : null}

                <SortBtn handleSubmit={this.handleSubmit}
                    sortBy={this.state.sortBy} />

                <Search changeState={this.changeState} />

                <div className="mt-3">
                    <div className="row ">
                        <div className="card-deck d-flex justify-content-center">

                            {this.state.sortedPosts.map(p => <Motor key={p._id} {...p} />)}

                        </div>
                    </div>
                </div>
            </section>)
    }
}

Catalog = withAuthLogged(Catalog);

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

 export default connect(mapStateToProps, mapDispatchToProps)(Catalog);





