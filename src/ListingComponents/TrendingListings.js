import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom';


const TrendingListings = props => {

    return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Trending Listings</Card.Title>
            <Card.Text>
                
            </Card.Text>
            <NavLink to='/trendingListings'>Search Trending Listings</NavLink>
          </Card.Body>
        </Card>
    )
}

export default TrendingListings;