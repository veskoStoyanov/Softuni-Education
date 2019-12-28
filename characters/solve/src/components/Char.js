import React, { Component } from 'react';
import observerMenu from '../utils/observer';

export default class Char extends Component {
   
    
    render() {
        
        return (
            <div onClick={() =>observerMenu.executeObserver('changeFocus', {id:this.props.params.id})} className="warper">
                <img className='slidImg warper' alt="somePic" src={this.props.params.url} />
            </div>
        )
    }
}