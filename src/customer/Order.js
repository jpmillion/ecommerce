import React from 'react'
import Card from 'react-bootstrap/esm/Card';

const Order = props => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Text>
                {props.created_at}<br></br>
                {props.total}
            </Card.Text>
        </Card>
    )
}

export default Order;
