import React, { Component } from 'react';

import { Motor, SortBtn } from '../../';

import './catalog.css';

import motors from '../../../infrastructore/motors';



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

            let sortedPosts = motors;
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


export default Catalog





