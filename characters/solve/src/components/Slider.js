import React, { Component } from 'react';

import left from '../resources/left.png'
import right from '../resources/right.png'

export default class Slider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            focusedId: 0,
            imgUrl: ''
        }

        this.onChangeImg = this.onChangeImg.bind(this)
    }

    componentDidMount() {
        fetch(`http://localhost:9999/episodePreview/${this.state.focusedId}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    imgUrl: data.url,
                })
            })
    }

    onChangeImg = id => {
        fetch(`http://localhost:9999/episodePreview/${id}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    imgUrl: data.url,
                    focusedId: data.id
                })
            })
    }

    render() {
        return (
            <div className="warper">
                <img className="slider-button case-left" onClick={() => {
                    return this.onChangeImg(+this.state.focusedId - 1)
                }} alt="leftArrow" src={left} />
                <img className="sliderImg" alt="somePic" src={this.state.imgUrl} />
                <img className="slider-button case-right" onClick={() => {
                    return this.onChangeImg(+this.state.focusedId + 1)
                }} alt="leftArrow" src={right} />
            </div>
        )
    }
}

