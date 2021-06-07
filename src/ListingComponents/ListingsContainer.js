import React, {useState} from 'react';
import { connect } from 'react-redux';
import Listings from './Listings';
import { NavLink } from 'react-router-dom';
import { displayCart } from '../helpers';

const ListingsContainer = props => {

  const [text, setText] = useState('');


    const handleChange = (e) => {
      setText(e.target.value);
    }

    const filteredListings = props.listings.filter(listing => listing.title.includes(text));


    return (
      <div>
        <NavLink to='/ecommerce'>Home</NavLink><br></br>
        <input type='text' onChange={(e) => handleChange(e)} name='text'></input>
        {/* <Listings products={props.listings}/> */}
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