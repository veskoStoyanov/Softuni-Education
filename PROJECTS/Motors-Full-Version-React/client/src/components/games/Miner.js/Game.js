import React from 'react';
import toastr from 'toastr';
import Board from './Board';

import './index.css'

export default class Game extends React.Component {

    /*
    Beginner: 10 mines, 8x8 board
    Intermediate: 20 mines, 12x12 board
    Expert: 40 mines, 16x16 board
    */
    state = {
        height: 8,
        width: 8,
        mines: 10,
        error: false
    };

    handleGameStart = () => {
        let difficulty = document.getElementById('level_select');
        if (difficulty.value === "beginner") {
            this.setState({
                height: 8,
                width: 8,
                mines: 10,
            });
        }
        if (difficulty.value === "intermediate") {
            this.setState({
                height: 12,
                width: 12,
                mines: 20,
            });
        }
        if (difficulty.value === "expert") {
            this.setState({
                height: 16,
                width: 16,
                mines: 40,
            });
        }
    }

    componentDidCatch() {
        toastr.error('Please Resfresh the Page');
       this.setState({
           error: true
       })
    }


    render() {
        const { height, width, mines, error } = this.state;
       if(error) {
       return <h1>Error! Please Refresh the Page!!!</h1>
       }

       return (
        <div id="play-game">
            <div className="game bot">
            <div className="game-info">
                <div className="instructions">
                <div class="alert alert-dismissible alert-warning">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <h4 class="alert-heading">Warning!</h4>
  <p class="mb-0">The Game is in process so when you start new game it is possible error occurs, if so Please refresh the page: press F5 or the circle above!.</p>
</div>
                    <h1 className="title">Rules</h1>
                    <p>You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you click on a square containing a bomb, you lose. If you manage to click all the squares (without clicking on any bombs) or flag all the mines, you win.</p>
                    <p>Clicking a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs. Use this information plus some guess work to avoid the bombs.</p>
                    <p>To open a square, point at the square and click on it. To mark a square you think is a bomb, point and right-click.</p>
                </div>


                <div class="alert alert-dismissible alert-light game-start">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>Select a level a click "start"</strong> 
  <div className="info">Level:

  <select select id="level_select" className="custom-select">
            <option value="beginner">Beginner  </option>
            <option value="intermediate">Intermediate  </option>
            <option value="expert">Expert </option>                
    </select>
                </div>
                <button  className="btn btn-outline-danger a-btn start-btn" onClick={this.handleGameStart}>Start</button>
</div>

            </div>

           <div id='board'>
           <Board height={height} width={width} mines={mines} />
           </div>
            
        </div>
        </div>
    )
    }
}


