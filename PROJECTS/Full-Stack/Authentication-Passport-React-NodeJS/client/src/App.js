import React, {useState} from 'react';
import Home from './Home';
import About from './About';

import Email from './Email';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [ endpoint, setEndpoint ] = useState('');
  
  return (
    <div className="App">
  <Router>
  <Switch>
  <Route
  path="/"
  exact
  render={(props) => <Home setEndpoint={ setEndpoint } />} 
/>
<Route
  path='/user/login/:endpoint/:token'
  exact
 component={About}
/>

<Route
  path='/email'
  exact
  render={(props) => <Email endpoint={endpoint} />} 
/>
  </Switch>
      </Router>
      
    </div>
  );
}

export default App;
