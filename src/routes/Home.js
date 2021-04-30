import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CustomerContainer from '../customer/CustomerContainer';
import { displayCart } from '../helpers';
import Navigation from '../Navigation';

export class Home extends PureComponent {

    logOut = () => {
        sessionStorage.clear();
        this.props.dispatch({type: 'LOG_OUT'})
    }

    render() {
        return (
            <div>
                <Navigation loggedIn={this.props.loggedIn} logOut={this.logOut} />
                <div>{displayCart()}</div>
                <CustomerContainer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.logIn,
        cartItems: state.cartItems,
        firstName: state.customer.first_name,
        cartTotal: state.cart.total
    }
}

export default connect(mapStateToProps)(Home);
