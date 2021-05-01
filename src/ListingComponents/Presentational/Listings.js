import React from 'react';
import { connect } from 'react-redux';
import { fetchCreateCartItem } from '../../actions/fetchCreateCartItem';
import Listing from './Listing';
import CardDeck from 'react-bootstrap/CardDeck';

const Listings = props => {

    const listings = props.products.map((product) => (<Listing key={product.listing_id} { ...product } addToCart={props.fetchCreateCartItem} cartId={props.cartId}/>))
    return (
        <CardDeck>
            {listings}
        </CardDeck>
    )
}

const mapStateToProps = state => {
    return {
        cartId: state.cart.id
    }
}

export default connect(mapStateToProps, { fetchCreateCartItem })(Listings)