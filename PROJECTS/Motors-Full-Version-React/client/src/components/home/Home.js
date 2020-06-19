import React from 'react';
import toastr from 'toastr';

import text from '../../infrastructore/textDescription';

import { withGuests } from '../../infrastructore/hocs';

let Home = () => {
  toastr.success(text['home'])

  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Browse Our Motors!</h1>
        <p>
          MotorBg is a web portal to the world of North American wholesale auto auctions. This innovative technology
          allows international buyers to search, buy and export any vehicle of their choice. MotorBg works with
          clients from over 120 countries. The company was established in 2007.
      </p>
        <h2>Become a member</h2>
        <ul>
          <li>
            <p>
              You can get an access to over 250,000 clean and salvage motors from North American Auto Auctions, YAMAHA,
              HONDA, BMW, SIMSON, CHEVROLET, APRILIA, CZ, MALAGUTY, HARLEY
            </p>
          </li>
          <li>
            <p>
              Assistance with buying a motor through North American Auto Auction's or Dealer's
            </p>
          </li>
          <li>
            <p>
              We arrange ground transportation from the sale location to the port or warehouse
           </p>
          </li>
          <li>
            <p>
              Handle all the documentation work to export a motor
           </p>
          </li>
          <li>
            <p>
              Ocean transportation to the Burgas and Varna ports, Bulgaria
            </p>
          </li>
          <li>
            <p>
              Assistance with Custom Clearance at destination
             </p>
          </li>
          <li>
            <p>
              You can check your purchase status 24/7 through your auction export profile
            </p>
          </li>
        </ul>
        <h1>REGISTER FOR FREE »</h1>
        <div className="bs-component">
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "75%" }}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home = withGuests(Home)
export default Home

