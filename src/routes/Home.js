import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomerContainer from '../customer/CustomerContainer';

export class Home extends PureComponent {

    homePage = () => {
        if (this.props.loggedIn) {
            return <CustomerContainer />
        } else {
            return (<div>
                        <NavLink to='/listings'>Listings</NavLink>
                        <NavLink to='/login'>Log In</NavLink>
                        <NavLink to='/register'>Register</NavLink>
                    </div>)
        }
    }

    render() {
        return (
            <div>
                {this.homePage()}
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
