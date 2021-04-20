import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Cart from '../Cart';
import CustomerContainer from '../customer/CustomerContainer';
import Navigation from '../Navigation';

export class Home extends PureComponent {

    logOut = () => {
        this.props.dispatch({type: 'LOG_OUT'})
    }

    displayCart = () => {
        if (this.props.loggedIn) return <Cart cartItems={this.props.cartItems} firstName={this.props.firstName} />
    }

    render() {
        return (
            <div>
                <Navigation loggedIn={this.props.loggedIn} logOut={this.logOut} />
                {this.displayCart()}
                <CustomerContainer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.logIn.loggedIn,
        cartItems: state.logIn.customer.attributes.cart_items,
        firstName: state.logIn.customer.attributes.first_name
    }
}

export default connect(mapStateToProps)(Home);
