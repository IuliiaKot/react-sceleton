import React, {Component} from 'react';
import { InputGroup, InputGroupButton, Input, Row, Col } from 'reactstrap';
import axios from 'axios';
import myData from './allstations.json';


class Search extends Component {

  constructor(){
    super()
    this.state = {
      stations: []
    }
  }

  componentDidMount(){
    let allStations = myData.root.stations.station;
    this.setState({
      stations: allStations
    })

  }

    render() {
        return (
          <div>
            <InputGroup>
              <Input />
              <select>
                <input/>
                {
                  this.state.stations.map((station, id) => {
                    return   <option key={id} value="grapefruit">{station.address}</option>
                  })
                }
              </select>
            </InputGroup>
            <br/>
          </div>
           
        )
    }
}

export default Search;