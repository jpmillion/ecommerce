import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom';

const Cart = props => {
    const currency = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    const text = props.cartItems.length ? `Total ${currency.format(props.total)}` : 'You currently is currently empty';

    return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{props.firstName}'s Shopping Cart</Card.Title>
            <Card.Text>
                {text} <br></br>
                {props.cartItems.length && `There is ${props.cartItems.length} item(s) in your cart `}
            </Card.Text>
            <NavLink to='/cart'>View Cart</NavLink>
          </Card.Body>
        </Card>
    )
}

export default Cart
