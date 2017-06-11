import React, { Component } from 'react';
import Search from './Search';
import BusLists from './BusLists';
import logo from './logo.svg';
import './App.css';
import myData from './allstations.json';
import {Container, Col, Row} from 'reactstrap'
import Geolocation from './Geolocation'

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
       <div className="main">
         <Geolocation/>
          <Container>
          <Row>
            <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
              <Search stations={this.state.allStations} handleUpdate={this.updateStation}/>
              <br/>
              <BusLists stationInfo={this.state.stationInfo}/>
            </Col>
          </Row>
        </Container>
       </div>

    );
  }
}

export default App;
