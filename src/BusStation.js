import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardHeader, CardFooter, CardBlock } from 'reactstrap';


class BusStation extends Component {
    render() {
        return (
        <Row>
            <Col sm="12">
               <Card>
                    <CardHeader>Header</CardHeader>
                    <CardBlock>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                    </CardBlock>
                    <CardFooter>Footer</CardFooter>
                </Card>
            </Col>
        </Row>
        )
    }
}


export default BusStation;