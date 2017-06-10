import React, {Component} from 'react';
import { InputGroup, InputGroupButton, Input, Row, Col} from 'reactstrap';
import axios from 'axios';
import myData from './allstations.json';
import Autocomplete from 'react-autocomplete';
import Select from 'react-select';
let parseString = require('xml2js').parseString;

class Search extends Component {

  constructor(){
    super()
    this.state = {
      allStations: [],
      value: ''
    }
    this.logChange = this.logChange.bind(this)
  }

  componentDidMount(){
    let allStations = myData.root.stations.station;

    this.setState({
      allStations: allStations
    })

  }
    logChange(val) {
        this.setState({
            value: (val ? val.value : "")
        })

        axios.get('https://api.bart.gov/api/etd.aspx?cmd=etd&orig=19TH&key=MW9S-E7SL-26DU-VV8V')
            .then(res => {
                parseString(res.data, function (err, result) {
                    // debugger
                    console.log(result);
                });
            })
    }



    render() {
        return (
          <div>
           <Select
                name="form-field-name"
                value={this.state.value}
                options={this.state.allStations.map(station => {
                    return {value: station.abbr, label: station.address}
                })}
                onChange={this.logChange}
                />
          </div>           
        )
    }
}

export default Search;

