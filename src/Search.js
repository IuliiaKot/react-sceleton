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
                    <InputGroupButton><Button>I'm a button</Button></InputGroupButton>
                    <Input />
                </InputGroup>
                <br />
                <InputGroup>
                    <Input />
                    <InputGroupButton></InputGroupButton>
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupButton></InputGroupButton>
                    <Input placeholder="and..." />
                    <InputGroupButton><Button color="secondary">I'm a button</Button></InputGroupButton>
                </InputGroup>
                </div>           
        )
    }
}

export default Search;