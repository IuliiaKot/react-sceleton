import React from 'react';
import { Card, CardTitle } from 'reactstrap';


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