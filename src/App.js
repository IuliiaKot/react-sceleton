import React, { Component } from 'react';
import Search from './Search';
import BusLists from './BusLists';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import myData from './allstations.json';
import {Container, Col, Row} from 'reactstrap'

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
        <Container>
          <Row>
            <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
              <Search stations={this.state.allStations} handleUpdate={this.updateStation}/>
              <BusLists stationInfo={this.state.stationInfo}/>
            </Col>
          </Row>
        </Container>

    );
  }
}

export default App;
