import React, {Component} from 'react';
import { InputGroup, InputGroupButton, Input, Row, Col} from 'reactstrap';
import axios from 'axios';
import Autocomplete from 'react-autocomplete';
import Select from 'react-select';
let parseString = require('xml2js').parseString;

class Search extends Component {

  constructor(){
    super()
    this.state = {
      value: ''
    }
    this.fetchInfoStation = this.fetchInfoStation.bind(this)
  }

    fetchInfoStation(val) {
        this.setState({
            value: (val ? val.value : "")
        })

        axios.get('https://api.bart.gov/api/etd.aspx?cmd=etd&orig=19TH&key=MW9S-E7SL-26DU-VV8V')
            .then(res => {
                parseString(res.data, (err, result)  => {
                    this.props.handleUpdate(result)
                });
            })
    }



    render() {
        return (
          <div>
           <Select
                name="form-field-name"
                value={this.state.value}
                options={this.props.stations.map(station => {
                    return {value: station.abbr, label: station.name}
                })}
                onChange={this.fetchInfoStation}
                />
          </div>           
        )
    }
}

export default Search;

