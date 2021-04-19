import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CustomerContainer from '../customer/CustomerContainer';
import Navigation from '../Navigation';

export class Home extends PureComponent {

    render() {
        return (
            <div>
                <Navigation loggedIn={this.props.loggedIn} />
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
