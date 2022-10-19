import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Header} from './features/Header/Header';
import Home from './features/Home/Home';
import Post from './features/Post/Post';
import Pages from './features/Pages/Pages';
import IndividualPost  from './features/IndividualPost/individualPost';
import {Subreddit} from './features/Subreddit/Subreddit'
//git push -u origin main

function App() {
  return (
      <div className='app'>
        <Router>
          <Header />
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/individualPost'>
            <IndividualPost/>
          </Route>
          <Route exact path='/subreddit'>
            <Subreddit/>
          </Route>
        </Router>
      </div>
  )
}

export default App;
