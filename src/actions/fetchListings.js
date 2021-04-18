import fetchJsonp from 'fetch-jsonp';

const KEY = process.env.REACT_APP_ETSY_API_KEY;

export const fetchListings = async dispatch => {
  try {
    dispatch({ type: 'LOADING_CATS'});
    const resp = await fetchJsonp(`https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&api_key=${KEY}`)
    const listings = await resp.json();
    dispatch({type: 'ADD_LISTINGS', listings: listings.results})
  } catch(e) {
    window.alert(e.message);
  }
}