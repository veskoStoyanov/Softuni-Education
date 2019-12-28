import React, { Component } from 'react';
import Char from './Char';

export default class Bio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.focusedId,
            char: {}
        }
    }

    componentDidMount() {
        fetch(`http://localhost:9999/character/${this.state.id}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    char: data
                })

            })
    }

    render() {
        
        return (
            <div>
                <fieldset>
                    <Char params={({ url: this.state.char.url })} />
                    <p>{this.state.char.bio}</p>
                </fieldset>
            </div>
        )
    }

}