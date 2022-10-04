import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './features/Header/Header';
import Home from './features/Home/Home';
import Post from './features/Post/Post';
//git push -u origin main

function App() {
  return (
      <div className='app'>
        <Router>
          <Header />
          <Route exact path='/'>
            <Home />
          </Route>
          <Route>
            <Post post='/:permalink'/>
          </Route>
        </Router>
      </div>
  )
}

export default App;
