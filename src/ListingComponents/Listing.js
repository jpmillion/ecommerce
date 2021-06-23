import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

const Listing = props => {

  let history = useHistory();

  const handleClick = () => {
    if (!sessionStorage.getItem('token')) {
      window.alert('MUST BE LOGGED IN TO ADD ITEM TO CART')
      return history.push('/login')
    }
    props.addToCart({...props, quanity: 1})
  }

  return (
    <div className='col-sm text-center'>
      <Card style={{ width: '18rem', height: '30rem', margin: 'auto', marginTop: '15px' }}>
        <Card.Img variant="top" src={props.MainImage.url_170x135} alt={props.title} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
              {props.price} 
              <Button variant="dark" onClick={handleClick} style={{margin: '5px'}}>Add To Cart</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Listing
