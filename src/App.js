import React from 'react';
import './App.css';
import GetSubredditPosts from './features/RedditJSON/redditJson';


//git push -u origin main

function App() {
  return (
      <div className='app'>
        <GetSubredditPosts/>
      </div>
  )
}

export default App;
