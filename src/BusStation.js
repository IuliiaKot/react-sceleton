import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardHeader, CardFooter, CardBlock } from 'reactstrap';


class BusStation extends Component {
    render() {
        let station = this.props.info
        debugger
        return (
        <Row>
            <Col sm="12" md="6">
               <Card>
                    <CardHeader><strong>{station.destination}</strong><br/></CardHeader>
                    <CardBlock>
                    <CardTitle>The next bus are in:</CardTitle>
                        <CardText>
                            <ul className="displayList">
                                {
                                station.estimate.map((time, idx) => {
                                    return <li key={idx}>
                                        <span style=
                                            {{backgroundColor: time.hexcolor[0], width: '15px', height:'10px', border: '1px solid black', color:time.hexcolor[0]}}>xxi</span> 
                                             {time.minutes[0]} {time.minutes[0]==='Leaving'? '' : 'min'}  ({time.length[0]} car)
                                    </li>
                                })
                            }
                            </ul>
                        </CardText>
                    </CardBlock>
                    <CardFooter>Footer</CardFooter>
                </Card>
            </Col>
        </Row>
        )
    }
}



export default BusStation;