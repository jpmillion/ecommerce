import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Listing = (props) => {
    return (
      <div className='col-sm-3'>
        <Card style={{ width: '18rem', height: '30rem', margin: '20px' }}>
          <Card.Img variant="top" src={props.MainImage.url_170x135} alt={props.title} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.price}
                <Button variant="dark" onClick={e => props.addToCart(props.cartId, 1, props.price, props.title, props.description, props.MainImage.url_75x75)}>Add To Cart</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
}

export default Listing
