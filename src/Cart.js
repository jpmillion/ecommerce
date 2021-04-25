import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { displayNumOfCartItems } from './helpers';

const Cart = props => {
    const currency = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    const text = () => {
      if (props.cartItems.length) {
        return (
          <ListGroup>
            <ListGroupItem>Total {currency.format(props.total)}</ListGroupItem>
            <ListGroupItem>There are currently {displayNumOfCartItems(props.cartItems)} item(s) in your cart</ListGroupItem>
            <ListGroupItem><NavLink to='/cart'>View Cart</NavLink></ListGroupItem>
          </ListGroup>
         )
      } else { 
        return (
          <Card.Text>Your cart is currently empty</Card.Text>
        )
      }
    }

    return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{props.firstName}'s Shopping Cart</Card.Title>
            {text()} 
          </Card.Body>
        </Card>
    )
}

export default Cart
