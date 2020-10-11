import React from 'react';

import { withGuests } from '../../infrastructore/hocs';

import './about.css';

let About = () => {
    return (
        <div className="back jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Welcome to MotorBG</h1>
                <ul>
                    <li>
                        <p>
                            By using MotorBg, you agree to be bound by all terms and conditions contained in the T&C. If you
                            do not agree with the terms and conditions of the T&C at any time, you will discontinue your use
                            of AUCTION EXPORT.
                        </p>
                    </li>
                    <li>
                        <p>
                            The material that appears on MotorBg is for informational purposes only. Despite our efforts to
                            provide useful and accurate information, errors may appear from time to time. Before purchasing
                            vehicles and/or related services that you have read about on AUCTION EXPORT, you should confirm
                            any information (including the price) that is important to your purchasing decision. MotorBg is
                            not responsible nor makes any warranty, express or implied, or endorsement regarding any vehicles
                            being posted for sale on AUCTION EXPORT or as to any of the related services that are being
                            offered through this site. We are also not responsible for controlling the vehicles posted for
                            sale or services being offered through this website, or any losses that you may incur while using our site.
                        </p>
                    </li>

                    <li>
                        <p>
                            Register: Any field is required , an username is unique, pay atention if there is such one already!
                            It should be at least 2 symbols,the password must be at least 6 symbols, the repeat-password must be
                            the same as the password, an image should be url and start with http! <a
                            href="https://www.google.com/search?q=profile+picture&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiMlq6u5tLlAhURy6YKHVV7AqcQ_AUIEigB&biw=1366&bih=608#imgrc=2ZNJkZbvn-mYBM:">
                            Get a Picture!</a> !
                        </p>
                    </li>
                    <li>
                        <p>
                            Login: Any field is required! Use your username and password to join!
                        </p>
                    </li>
                    <li>
                        <p> Add-Moto: Any field is required! Choose one of 27 districts in Bulgaria, Price must be positive
                            number!, Model should be more that 1 symbols, an image should be url and start with http! <a
                            href="https://www.google.com/search?q=honda+moto&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjpjZjc--HlAhWBepoKHahCD8sQ_AUIEigB&biw=1366&bih=657">
                            Get an url</a> ! Description is some text not less that 10 symbols!
                        </p>
                    </li>
                    <li>
                        <p>
                            Box: Any message should have Subject and some text!
                        </p>
                    </li>
                    <li>
                        <p>
                            You understand that MotorBg does not control the price and any other terms of any sale offered through
                            its website and that these are strictly within the control of the seller and/or dealer of that vehicle
                            or automotive-related services.
                         </p>
                    </li>

                    <li>
                        <p>
                            You have the right to file a complaint with a supervisory authority if you believe that the
                            processing of personal data concerning you violates the applicable data protection legislation.
                            The Supervisory Authority in the Republic of Bulgaria is the Commission for Personal Data Protection,
                            with address: 1592 Sofia, Prof. Tsvetan Lazarov ”8.
                        </p>
                    </li>
                    <li>
                        <p>
                            MotorBg is not responsible for the accuracy of the information you provide, does not carry out
                            verifications in this sense and does not guarantee the true identity of the data subjects. In all
                            cases of suspected fraud, and / or misuse, please notify us immediately. You agree that when
                            providing any information on the Site, you do not violate the rights of others in connection with
                            the protection of their personal data or their other rights.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        )
}

About = withGuests(About);
export default About;