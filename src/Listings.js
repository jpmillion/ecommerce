import React from 'react';
import Listing from './Listing';

const Listings = (props) => {

    const listings = props.products.map((product, idx) => (<Listing key={idx} { ...product }/>))

    return (
        <div>
            {listings}
        </div>
    )
}

export default Listings