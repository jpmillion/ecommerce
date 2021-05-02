import React from 'react';
import { displayCart } from '../helpers';
import Navigation from '../Navigation';
import CardDeck from 'react-bootstrap/CardDeck';
import SearchListingCard from '../listingComponents/SearchListingCard';

export const Home = () => {
    return (
        <div>
            <Navigation /><br></br><br></br>
            <div>{displayCart()}</div>
            <CardDeck >
                <SearchListingCard title='Trending Listings' route='/trendingListings' image="https://i.etsystatic.com/8789900/d/il/c0384b/646853390/il_170x135.646853390_1nbn.jpg?version=1"/>
                <SearchListingCard title='Interesting Listings' route='/interestingListings' image="https://i.etsystatic.com/6196192/d/il/91ad3e/818566630/il_170x135.818566630_fjaj.jpg?version=0"/>
                <SearchListingCard title='Active Listings' route='/listings' image="https://i.etsystatic.com/18538268/c/2250/1788/0/0/il/8f7a20/3052226842/il_170x135.3052226842_ggqf.jpg"/>
            </CardDeck>
        </div>
    )
}


export default Home;
