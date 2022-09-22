import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './features/Header/Header';
//git push -u origin main

function App() {
  return (
      <div className='app'>
        <Router>
          <Header />
        </Router>
      </div>
  )
}

export default App;
