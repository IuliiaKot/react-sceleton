import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardHeader, CardFooter, CardBlock } from 'reactstrap';


class BusStation extends Component {
    render() {
        return (
        <Row>
            <Col sm="12">
               <Card>
                    <CardHeader><strong>KT-INGLESIDE/THIRD STREET(OUTBOUND TO BALBOA PARK STATION)</strong><br/>
Embarcadero Folsom St</CardHeader>
                    <CardBlock>
                    <CardTitle>The next bus are in:</CardTitle>
                    <CardText>12 min 42 min 72 min</CardText>
                    </CardBlock>
                    <CardFooter>Footer</CardFooter>
                </Card>
            </Col>
        </Row>
        )
    }
}


export default BusStation;