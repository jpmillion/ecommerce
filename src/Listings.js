import React from 'react';
import Listing from './Listing';

const Listings = (props) => {

    const listings = props.products.results.map((result, idx) => (<Listing key={idx} { ...result }/>))

    return (
        <Listing>
            {listings}
        </Listing>
    )
}

export default Listings