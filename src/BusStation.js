import React, {Component} from 'react';
import { Card, CardTitle, CardText, Row, Col, CardHeader, CardFooter, CardBlock } from 'reactstrap';


class BusStation extends Component {
    render() {
        debugger
        let station = this.props.info
        return (
        <Row className="station">
            <Col sm="12">
               <Card>
                    <CardHeader><strong style={{fontSize: '15px'}}>{station.destination} (Platform {this.props.info.estimate[0].platform[0]})</strong><br/></CardHeader>
                    <CardBlock>
                    <CardTitle>The next train are in:</CardTitle>
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
                    {/*<CardFooter>Footer</CardFooter>*/}
                </Card>
            </Col>
        </Row>
        )
    }
}



export default BusStation;