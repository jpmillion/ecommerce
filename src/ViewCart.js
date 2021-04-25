import React, { PureComponent } from 'react';
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import { deleteCartItem } from './actions/deleteCartItem';
import { updateCartItemQuantity } from './actions/updateCartItemQuantity';
import { createOrderAndItems } from './actions/makePurchase';


class ViewCart extends PureComponent {

    makePurchase = () => {
        this.props.createOrderAndItems(this.props.customer.id, this.props.cart, this.props.cartItems);
    }

    items = () => this.props.cartItems.map(item => (
        <div key={item.id}>
            <p>{item.title}</p>
            <img src={item.image} alt={item.title}></img>
            <p>{item.description}</p>
            <p>{item.price} <Button onClick={e => this.props.deleteCartItem(this.props.cart.id, item.id)}>Remove Item</Button>
            <ListGroup horizontal >
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
            </p>
        </div>
    ))

    currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    render() {
        return (
            <div>
                <h1>{this.props.customer.first_name}'s Cart</h1>
                <h2>Total {this.currency.format(this.props.cart.total)} <Button onClick={this.makePurchase}>Purchase</Button></h2>
                {this.items()}
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
    createOrderAndItems
 })(ViewCart)
