import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom';


const SearchListingCard = props => {

    return (
        <Card className='bg-secondary text-center' >
          <Card.Body>
            <Card.Img src={props.image} alt={props.title} />
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                
            </Card.Text>
            <NavLink to={props.route} >Search {props.title}</NavLink>
          </Card.Body>
        </Card>
    )
}

export default SearchListingCard;