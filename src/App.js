
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import Listings from './Listings';

const KEY = process.env.REACT_APP_ETSY_API_KEY;

class App extends Component {

  state = {
    listings: []
  }

  fetchEtsy = async () => {
    try {
      const resp = await fetchJsonp(`https://openapi.etsy.com/v2/listings/active.js?fields=title,description,price&includes=MainImage&api_key=${KEY}`)
      const listings = await resp.json();
      this.setState({
        listings: listings.results
      })
      // this.setState({
      //   listings: listings.results.map(({title, price, description, Images}, idx) => (<div key={idx}><p>{title}</p><p>{price}</p><p>{description}</p><img src={Images[0].url_170x135} alt={description}></img></div>))
      // })
    } catch(e) {
      window.alert(e.message);
    }
  }

  componentDidMount() {
    this.fetchEtsy();
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
        </header>
        <Listings products={this.state.listings}/>
      </div>
    );
  }
}

export default App;
