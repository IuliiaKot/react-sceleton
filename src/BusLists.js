import React, {Component} from 'react';
import BusStation from './BusStation';
import Warning from './Warning';


class BusLists extends Component {
    render(){
        let allTrains = this.props.stationInfo
        return (
            <div>
                {
                    allTrains ? allTrains.map((station, idx) => {
                        return <BusStation info={station} key={idx}/> 
                    }) : (<Warning message="Updates are temporarily unavailable."/>)
                }
            </div>   
        )
    }
}

export default BusLists;