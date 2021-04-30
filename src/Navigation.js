import React from 'react';
import NavBar from 'react-bootstrap/NavBar';
//import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
    if (props.loggedIn) {
        return (
            <NavBar className='bg-secondary justify-content-center' style={{padding: '10px', fontSize: '2em'}} >
                <NavLink to='/' onClick={props.logOut} className='text-light'>Log Out</NavLink>
            </NavBar>
        )
    }
    return (
        <div className='row bg-secondary text-center' style={{padding: '10px', fontSize: '2em'}}> 
            <div className="col-sm-3"></div>
            <div className="col-sm-2"><NavLink className='text-light' to='/listings'>Listings</NavLink></div>
            <div className="col-sm-2"><NavLink className='text-light' to='/login'>Log In</NavLink></div>
            <div className="col-sm-2"><NavLink className='text-light' to='/register'>Register</NavLink></div>
            <div className="col-sm-3"></div>
        </div>
    )
}

export default Navigation
