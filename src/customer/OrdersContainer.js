import React from 'react'
import { connect } from 'react-redux'
import Order from './Order'

const OrdersContainer = props => {

    const orders = props.orders.map(order => <Order key={order.id} {...order} />)

    return (
        <div className='row justify-content-center'>
            <div className='col-sm-3 text-center' >
                {orders}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    orders: state.orders
})

export default connect(mapStateToProps)(OrdersContainer)
