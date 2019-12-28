import React from 'react';

import '../../style/bot.css';

import {withGuests} from '../../infrastructore/hocs';

let About = () => {
    
        return (<div className="back jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Welcome to Motors.bg</h1>
                
                <p>1. Register: Any field is required , an username is unique, pay atention if there is such one already! It should be at least 2 symbols,the password must be at least 6 symbols, the repeat-password must be the same as the password, an image should be url and start with http! <a href="https://www.google.com/search?q=profile+picture&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiMlq6u5tLlAhURy6YKHVV7AqcQ_AUIEigB&biw=1366&bih=608#imgrc=2ZNJkZbvn-mYBM:">Get a Picture!</a> !</p>
                <p>2. Login: Any field is required! Use your username and password to join! </p>
                <p>3. Add-Moto: Any field is required! Choose one of 27 districts in Bulgaria, Price must be positive number!, Model should be more that 1 symbols, an image should be url and start with http! <a href="https://www.google.com/search?q=honda+moto&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjpjZjc--HlAhWBepoKHahCD8sQ_AUIEigB&biw=1366&bih=657">Get an url</a> ! Description is some text not less that 10 symbols!</p>
                <p>4. Box: Any message should have Subject and some text!</p>
            </div>
            <div>
                <h5>MAIN PARTNERS</h5>
                <span><a href="https://softuni.bg/">SofTuni</a></span>
            </div>
        </div>)
    }
About = withGuests(About);
export default About;