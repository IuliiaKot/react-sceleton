import React, { Component } from 'react';
import Search from './Search';
import BusLists from './BusLists';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="center_div">
        <button type="button" class="btn btn-primary">Primary</button>
          <Search />
          <BusLists />
           <Button color="danger">Danger!</Button>
      </div>
    );
  }
}

export default App;
