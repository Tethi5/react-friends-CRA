import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList.js';
import Friend from './Friend'

class App extends Component {
  render() {

    return (
      <div>

      <h1>The<strong> facebook</strong> Friend Machine</h1>
      <FriendsList/>
      </div>
    );
  }
}

export default App;
