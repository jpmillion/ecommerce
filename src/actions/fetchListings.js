import fetchJsonp from 'fetch-jsonp';

const KEY = process.env.REACT_APP_ETSY_API_KEY;

export const fetchListings = () => {
    return dispatch => {
        dispatch({type: 'LOADING_LISTINGS'});
        fetchJsonp(`https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&api_key=${KEY}`)
        .then(resp => resp.json())
        .then(listings => dispatch({type: 'ADD_LISTINGS', listings: listings.results}))
        .catch(e => window.alert(e.message))
    }
//   try {
//     dispatch({ type: 'LOADING_LISTINGS'});
//     const resp = await fetchJsonp(`https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&api_key=${KEY}`)
//     const listings = await resp.json();
//     dispatch({type: 'ADD_LISTINGS', listings: listings.results})
//   } catch(e) {
//     window.alert(e.message);
//   }
}