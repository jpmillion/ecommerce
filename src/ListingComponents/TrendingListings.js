import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom';


const TrendingListings = props => {

    return (
        <Card className='text-center' style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Img src="https://i.etsystatic.com/8789900/d/il/c0384b/646853390/il_170x135.646853390_1nbn.jpg?version=1" alt="trending listings"/>
            <Card.Title>Trending Listings</Card.Title>
            <Card.Text>
                
            </Card.Text>
            <NavLink to='/trendingListings'>Search Trending Listings</NavLink>
          </Card.Body>
        </Card>
    )
}

export default TrendingListings;