import React, {Component} from 'react';
import { InputGroup, InputGroupButton, Input, Row, Col} from 'reactstrap';
import axios from 'axios';
import myData from './allstations.json';
import Autocomplete from 'react-autocomplete';

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
            <Autocomplete
                getItemValue={(item) => item.label}
                items={this.state.stations.map(elm => {
                  return {label: elm.address}
                })}
                renderItem={(item, isHighlighted) =>
                  <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                    {item.label}
                  </div>
                }
                onChange={(e) => value = e.target.value}
              />
              <br/>
            {/*<InputGroup>
              <Input />
              <select>
                <input/>
                {
                  this.state.stations.map((station, id) => {
                    return   <option key={id} value="grapefruit">{station.address}</option>
                  })
                }
              </select>
            </InputGroup>*/}
            <br/>
          </div>
           
        )
    }
}

export default Search;

  // value={value}
  //               onChange={(e) => value = e.target.value}
  //               onSelect={(val) => value = val}