import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Listing = (props) => {
    //const image = props.MainImage ? props.MainImage.url_170x135 : 'No Image';
    return (
        // <div>
        //     <p>{props.title}</p>
        //     <img src={props.MainImage.url_170x135} alt={props.title} />
        //     <p>{props.price}</p><br/>
        // </div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.MainImage.url_170x135} alt={props.title} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.price}
                <Button variant="dark" onClick={e => props.addToCart(props.cartId, 1, props.price)}>Add To Cart</Button>
            </Card.Text>
          </Card.Body>
        </Card>
    )
}

export default Listing
