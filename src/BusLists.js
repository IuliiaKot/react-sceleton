import React, {Component} from 'react';
import BusStation from './BusStation';


class BusLists extends Component {
    render(){
        let allTrains = this.props.stationInfo
        return (
            <div>
                {
                    allTrains.map(station => {
                        return <BusStation info={station}/> 
                    })
                }
            </div>   
        )
    }
}

export default BusLists;