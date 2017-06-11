import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardHeader, CardFooter, CardBlock } from 'reactstrap';


class BusStation extends Component {
    render() {
        let station = this.props.info
        debugger
        return (
        <Row>
            <Col sm="12">
               <Card>
                    <CardHeader><strong>{station.destination}</strong><br/></CardHeader>
                    <CardBlock>
                    <CardTitle>The next bus are in:</CardTitle>
                    {
                        station.estimate.map(time => {
                            return <CardText><p style={{backgroundColor: time.hexcolor[0], width: '10px', height:'10px'}}></p>{time.minutes[0]}({time.length[0]} car)</CardText>
                        })
                    }
                    </CardBlock>
                    <CardFooter>Footer</CardFooter>
                </Card>
            </Col>
        </Row>
        )
    }
}


export default BusStation;