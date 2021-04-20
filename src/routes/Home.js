import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CustomerContainer from '../customer/CustomerContainer';
import Navigation from '../Navigation';

export class Home extends PureComponent {

    logOut = () => {
        this.props.dispatch({type: 'LOG_OUT'})
    }

    render() {
        return (
            <div>
                <Navigation loggedIn={this.props.loggedIn} logOut={this.logOut} />
                <CustomerContainer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.logIn.loggedIn
    }
}

export default connect(mapStateToProps)(Home);
