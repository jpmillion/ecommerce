import React from 'react';

const Listing = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            <img src={props.MainImage.url_170x135} alt={props.title} />
            <p>{props.price}</p><br/>
        </div>
    )
}

export default Listing
