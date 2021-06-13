import React, { PureComponent } from 'react';
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import { deleteCartItem } from '../actions/deleteCartItem';
import { updateCartItemQuantity } from '../actions/updateCartItemQuantity';
import { createOrderAndItems, emptyCart } from '../actions/makePurchase';
import { NavLink } from 'react-router-dom';


class ViewCart extends PureComponent {

    makePurchase = () => {
        this.props.createOrderAndItems(this.props.customer.id, this.props.cart, this.props.cartItems);
        this.props.emptyCart(this.props.cart.id)
    }

    items = () => this.props.cartItems.map(item => (
        <div className='col-sm-4 text-center bg-secondary' style={{margin: '20px'}} key={item.id}>
            <p>{item.title}</p>
            <img src={item.image} alt={item.title} className='rounded mx-auto d-block' style={{margin: '5px'}} height='75px' width='75px' ></img>
            <p>{this.currency.format(item.price)} <Button onClick={e => this.props.deleteCartItem(this.props.cart.id, item.id)} style={{margin: '5px'}}>Remove Item</Button></p>
            <ListGroup horizontal className='justify-content-center' style={{margin: '5px'}} >
                <ListGroup.Item >
                    Quantitiy
                </ListGroup.Item>
                <ListGroup.Item>
                    {item.quantity}
                </ListGroup.Item>
                <ListGroup.Item onClick={() => this.props.updateCartItemQuantity(this.props.cart.id, item.id, ++item.quantity)}>
                    +
                </ListGroup.Item>
                <ListGroup.Item disabled={item.quantity <= 1} onClick={() => this.props.updateCartItemQuantity(this.props.cart.id, item.id, --item.quantity)}>
                    -
                </ListGroup.Item>
            </ListGroup>
        </div>
    ))

    currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    render() {
        return (
            <div>
                <NavLink to='/ecommerce'className='text-light' >Home</NavLink>
                <div className='row justify-content-center'>
                    {this.props.cartItems.length ? this.items() : <h2 className='text-light'>Your Cart Is Currently Empty</h2>}
                </div>
                <div className='bg-light' style={{position: 'fixed', top: '0', right: '0', padding: '10px'}}>
                    <h1>{this.props.customer.first_name}'s Cart</h1>
                    <h2>Total {this.currency.format(this.props.cart.total)} <Button onClick={this.makePurchase}>Purchase</Button></h2>
                </div>                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cartItems,
    cart: state.cart,
    customer: state.customer,
    order: state.order
})


export default connect(mapStateToProps, { 
    deleteCartItem, 
    updateCartItemQuantity,
    createOrderAndItems,
    emptyCart
 })(ViewCart)
