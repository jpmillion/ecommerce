import React from 'react';

const Listing = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            <img src={props.Images[0].url_170x135} alt={props.title} />
            <p>{props.price}</p><br/>
        </div>
    )
}

export default Listing
