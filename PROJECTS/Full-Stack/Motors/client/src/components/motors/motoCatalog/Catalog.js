import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { Motor, Search, SortBtn } from '../../';

import './catalog.css';

import withAuthLogged from '../../../infrastructore/hocs/withAuthLogged';
import { fetchMotorAction } from '../../../actions/motorsActions';

import text from '../../../infrastructore/textDescription';

class Catalog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortedPosts: [],
            sortBy: 'Sort-By',
        }
    }

    componentDidMount = async () => {
        toastr.success(text['catalog'])

        try {

            await this.props.fetchMotors('motors');

            let sortedPosts = this.props.data.filter(m => !m.isBanned);
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

        let noMoto = (<h1 >There are no Motors available!</h1>);

        return (<main role="main" id="catalog">
            <div className="panel panel-default">
                <div className="bs-component">
                    <Search changeState={this.changeState} />
                    <SortBtn handleSubmit={this.handleSubmit}
                        sortBy={this.state.sortBy} />
                    {this.state.sortedPosts.length === 0 ? noMoto : null}
                    <div className="panel-body">
                        <div className="row">
                            {this.state.sortedPosts.map(p => <Motor key={p._id} {...p} />)}
                        </div>
                    </div>
                </div>
            </div>
        </main>)
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





