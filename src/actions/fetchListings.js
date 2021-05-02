
import fetchJsonp from 'fetch-jsonp';

const URL = 'https://openapi.etsy.com/v2/listings';
const KEY = process.env.REACT_APP_ETSY_API_KEY;

export const fetchActiveListings = () => {
    return dispatch => {
        dispatch({type: 'LOADING_LISTINGS'});
        fetchJsonp(`${URL}/active.js?includes=MainImage&api_key=${KEY}`)
        .then(resp => resp.json())
        .then(listings => dispatch({type: 'ADD_LISTINGS', listings: listings.results}))
        .catch(e => window.alert(e.message))
    }
}

export const fetchTrendingListings = () => {
    return dispatch => {
        dispatch({type: 'LOADING_TRENDING_LISTINGS'});
        fetchJsonp(`${URL}/trending.js?includes=MainImage&api_key=${KEY}`)
        .then(resp => resp.json())
        .then(listings => dispatch({type: 'ADD_TRENDING_LISTINGS', listings: listings.results}))
        .catch(e => window.alert(e.message))
    }
}

export const fetchInterestingListings = () => {
    return dispatch => {
        dispatch({type: 'LOADING_INTERESTING_LISTINGS'});
        fetchJsonp(`${URL}/interesting.js?includes=MainImage&api_key=${KEY}`)
        .then(resp => resp.json())
        .then(listings => dispatch({type: 'ADD_INTERESTING_LISTINGS', listings: listings.results}))
        .catch(e => window.alert(e.message))
    }
}