import React, {Component} from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';


const Warning = (props) => {
    return (
        <div>
             <Card block inverse color="warning">
                <CardTitle>{props.message}</CardTitle>
            </Card>
        </div>
    )
}


export default Warning;