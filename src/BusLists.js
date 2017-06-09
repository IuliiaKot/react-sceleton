import React, {Component} from 'react';
import BusStation from './BusStation';


class BusLists extends Component {
    render(){
        return (
            <div>
                <BusStation /> <br/>
                <BusStation /> <br/>
                <BusStation /> 
            </div>   
        )
    }
}

export default BusLists;