
import './App.css';
import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import Listings from './Presentational/Listings';


const KEY = process.env.REACT_APP_ETSY_API_KEY;

class ListingsContainer extends Component {

  state = {
    listings: []
  }

  fetchEtsy = async () => {
    try {
      const resp = await fetchJsonp(`https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&api_key=${KEY}`)
      const listings = await resp.json();
      this.setState({
        listings: listings.results
      })
    } catch(e) {
      window.alert(e.message);
    }
  }

  componentDidMount() {
    this.fetchEtsy();
  }

  render() {
    
    return (
      <div>
        <Listings products={this.state.listings}/>
      </div>
    );
  }
}

export default ListingsContainer;