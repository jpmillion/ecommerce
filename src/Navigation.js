import React from 'react';
import NavBar from 'react-bootstrap/NavBar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
    if (props.loggedIn) {
        return (
            <NavBar>
                <Button href='/'>Log Out</Button>
            </NavBar>
        )
    }
    return (
        <NavBar variant='dark'> 
            <NavLink to='/listings'>Listings</NavLink>
            <NavLink to='/login'>Log In</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </NavBar>
    )
}

export default Navigation
