import React, { Component } from 'react';
import Char from './Char';

export default class Roster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            charArr: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:9999/roster')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    charArr: data
                })

            })
    }

    render() {
        return (
            <div>
                {this.state.charArr.map((x, index) => {
                    return <Char key={index} params={x} />
                })}
            </div>
        )
    }
}