import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Cart = props => {
    
    const text = props.cartItems.length ? 'You have items' : 'You currently have no items in your cart';

    return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{props.firstName}'s Shopping Cart</Card.Title>
            <Card.Text>
                {text}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    )
}

export default Cart
