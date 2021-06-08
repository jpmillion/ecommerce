import React, {useState} from 'react';
import { connect } from 'react-redux';
import Listings from './Listings';
import { NavLink } from 'react-router-dom';
import { displayCart } from '../helpers';

const ListingsContainer = props => {

  const [text, setText] = useState('');
  const words = text.split(' ');

  const handleChange = (e) => {
    setText(e.target.value.toLowerCase());
  }
  
  const filteredListings = props.listings.filter(listing => words.every(word => listing.title.toLowerCase().includes(word)));
  
  return (
    <div>
      <NavLink to='/'>Home</NavLink><br></br>
      <input type='text' onChange={(e) => handleChange(e)} name='text'></input>
      <Listings products={filteredListings} />
      {displayCart()}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    listings: state.listings,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(ListingsContainer);