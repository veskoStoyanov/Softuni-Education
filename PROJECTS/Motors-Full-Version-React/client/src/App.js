import React from 'react';
import { Header, Preloader, Routes, Footer } from './components'

import './App.css';

const App = () => {
  return (<div className="App">
    <Header />
    <Preloader />
  <div className='routes'>
  <Routes />
  </div>
    <Footer />
  </div>
  )
}
export default App;
