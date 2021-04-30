import React from 'react';
import CustomerContainer from '../customer/CustomerContainer';
import { displayCart } from '../helpers';
import Navigation from '../Navigation';

export const Home = () => {
    return (
        <div>
            <Navigation />
            <div>{displayCart()}</div>
            <CustomerContainer />
        </div>
    )
}


export default Home;
