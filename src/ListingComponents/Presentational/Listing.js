import React from 'react';

const Listing = (props) => {
    const image = props.MainImage ? props.MainImage.url_170x135 : 'No Image';
    return (
        <div>
            <p>{props.title}</p>
            <img src={image} alt={props.title} />
            <p>{props.price}</p><br/>
        </div>
    )
}

export default Listing
