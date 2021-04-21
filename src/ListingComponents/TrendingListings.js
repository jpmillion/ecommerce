import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const TrendingListings = props => {

    return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Trending Listings</Card.Title>
            <Card.Text>
                
            </Card.Text>
            <Button variant="primary" href='/trendingListings'>Trending Listings</Button>
          </Card.Body>
        </Card>
    )
}

export default TrendingListings;