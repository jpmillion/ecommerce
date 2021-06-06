import React, {useState} from 'react';
import { connect } from 'react-redux';
import Listings from './Listings';
import { NavLink } from 'react-router-dom';
import { displayCart } from '../helpers';

const ListingsContainer = props => {

  const [text, setText] = useState('');
  const words = text.split(' ');
  if (words[words.length-1] === '') {
    words.pop();
  }

    const handleChange = (e) => {
      setText(e.target.value.toLowerCase());
    }
    console.log(words)
    const filteredListings = props.listings.filter(listing => listing.title.toLowerCase().includes(text));
    const f = [];
    for (const l of props.listings) {
      for (const w of words) {
        if (w === '') continue;
        if (l.title.toLowerCase().includes(w)) {
          if (!f.includes(l)) f.push(l);
        }
      }
    }

    return (
      <div>
        <NavLink to='/'>Home</NavLink><br></br>
        <input type='text' onChange={(e) => handleChange(e)} name='text'></input>
        {/* <Listings products={props.listings}/> */}
        <Listings products={f.length ? f : props.listings} />
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