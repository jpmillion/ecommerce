import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom';

const Cart = props => {
    
    const text = props.cartItems.length ? 'You have items' : 'You currently have no items in your cart';

    return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{props.firstName}'s Shopping Cart</Card.Title>
            <Card.Text>
                {text}
            </Card.Text>
            <NavLink to='/trendingListings'>Search Trending Listings</NavLink>
          </Card.Body>
        </Card>
    )
}

export default Cart
