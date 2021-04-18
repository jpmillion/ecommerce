import React from 'react';
import Listing from './Listing';

const Listings = (props) => {

    const listings = props.products.map((product) => (<Listing key={product.listing_id} { ...product }/>))

    return (
        <div>
            {listings}
        </div>
    )
}

export default Listings