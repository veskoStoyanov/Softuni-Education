import React from 'react';
import { Link } from 'react-router-dom';

let Play = ({ img, link }) => {

   return (<div id="game">
      <div className="col-md-3">
         <div className="card mb-3">
            <Link to={link}><img className="img" src={img} alt="Cardimage" /></Link>
         </div>
      </div>
   </div>)
}

export default Play;