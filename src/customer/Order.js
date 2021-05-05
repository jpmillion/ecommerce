import React from 'react'

const Order = props => {
    return (
        <div>
            {props.created_at}<br></br>
            {props.total}
        </div>
    )
}

export default Order;
