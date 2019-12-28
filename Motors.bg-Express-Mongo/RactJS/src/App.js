import React from 'react';
import { Header, Preloader, Routes, Footer } from './components'

import './App.css';
import './style/site.css';
import './style/index.css';

const App = () => {
  return (<div className="App">
    <Header />
    <Preloader />
    <Routes />
    <Footer />
  </div>
  )
}
export default App;
