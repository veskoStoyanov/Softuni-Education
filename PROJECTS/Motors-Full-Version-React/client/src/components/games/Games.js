import React from 'react';

import { Play } from '../';

import './games.css';

const Games = () => {
  let minerImg = "data:image/jpeg;base64,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";
  let minerUrl = '/games/miner';

  return (
    <main role="main" id="games">
      <h1 className="text-center title">Games</h1>
      <div className="panel panel-default">
        <div className="bs-component">
          <div className="panel-body">
            <div className="row">
              <Play img={minerImg} link={minerUrl} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Games;