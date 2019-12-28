import React from 'react';

import '../../style/index.css';
import '../../style/bot.css';

import {withGuests} from '../../infrastructore/hocs';

let Home = () => {   
        return (<div className="background"></div>)   
}
Home = withGuests(Home)
export default Home

