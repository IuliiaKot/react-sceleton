import React, { Component } from 'react';
import Search from './Search';
import BusLists from './BusLists';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import myData from './allstations.json';

class App extends Component {
  constructor(){
    super()
    this.state = {
      allStations: [],
      stationInfo: []
    }
    this.updateStation = this.updateStation.bind(this)
  }

  componentDidMount(){
    let allStations = myData.root.stations.station;

    this.setState({
      allStations: allStations
    })

  }

  updateStation(data){
    this.setState({
      stationInfo: data.root.station[0].etd
    })
  }

  render() {
    return (
      <div className="center_div">
          <Search stations={this.state.allStations} handleUpdate={this.updateStation}/>
          <BusLists stationInfo={this.state.stationInfo}/>
      </div>
    );
  }
}

export default App;
