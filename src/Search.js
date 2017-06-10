import React, {Component} from 'react';
import { InputGroup, InputGroupButton, Input, Button } from 'reactstrap';

class Search extends Component {
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