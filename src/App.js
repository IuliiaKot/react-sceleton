import React, { Component } from 'react';
import Search from './Search';
import BusLists from './BusLists';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <button type="button" class="btn btn-primary">Primary</button>
          <Search />
          <BusLists />
      </div>
    );
  }
}

export default App;
