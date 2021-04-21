import fetchJsonp from 'fetch-jsonp';

const KEY = process.env.REACT_APP_ETSY_API_KEY;

export const fetchTrendingListings = () => {
    return dispatch => {
        dispatch({type: 'LOADING_TRENDING_LISTINGS'});
        fetchJsonp(`https://openapi.etsy.com/v2/listings/trending.js?includes=MainImage&api_key=${KEY}`)
        .then(resp => resp.json())
        .then(listings => dispatch({type: 'ADD_TRENDING_LISTINGS', listings: listings.results}))
        .catch(e => window.alert(e.message))
    }
}