import React from 'react';

import './about.css';

let About = () => {
    return (
        <div className="back jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Welcome to MotorBG</h1>
                <ul>
                    <li>
                        <p className='info'>
                        After download there are two files. It requires mongoDb. In Node JS write node index and in react write npm install and then npm start
                        it will start automatically at localhost:3000 there are information about every page that pop up just hover over it.
                        </p>
                    </li>
                   
                </ul>
            </div>
        </div>
        )
}

export default About;