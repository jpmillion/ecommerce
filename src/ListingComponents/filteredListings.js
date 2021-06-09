import React, {useState} from 'react';
import Listings from './Listings';
import { NavLink } from 'react-router-dom';
import { displayCart } from '../helpers';

const FilteredListings = props => {

    const [text, setText] = useState('');

    const words = text.split(' ');
  
    const handleChange = (e) => {
      setText(e.target.value.toLowerCase());
    }
    
    const filteredListings = props.filteredListings.filter(listing => words.every(word => listing.title.toLowerCase().includes(word)));
  
    return (
      <div>
        <NavLink to='/ecommerce'>Home</NavLink><br></br>
        <div class='text-center'><input type='text' onChange={(e) => handleChange(e)} name='text' placeholder='Search Listings'></input></div>
        <Listings products={filteredListings} />
        {displayCart()}
      </div>
    );
}

export default FilteredListings
