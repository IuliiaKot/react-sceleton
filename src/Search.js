import React, {Component} from 'react';
import axios from 'axios';
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
        let url = `https://api.bart.gov/api/etd.aspx?cmd=etd&orig=${val.value}&key=MW9S-E7SL-26DU-VV8V`
        axios.get(url)
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
                style={{fontSize:'15px'}}
                />
          </div>           
        )
    }
}

export default Search;

