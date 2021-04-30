import React from 'react';
import NavBar from 'react-bootstrap/NavBar';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navigation = props => {

    const logOut = () => {
        sessionStorage.clear();
        props.dispatch({type: 'LOG_OUT'})
    }

    if (props.logIn) {
        return (
            <NavBar className='bg-secondary justify-content-center' style={{padding: '10px', fontSize: '2em'}} >
                <NavLink to='/' onClick={logOut} className='text-light'>Log Out</NavLink>
            </NavBar>
        )
    }
    return (
        <div className='row bg-secondary text-center' style={{padding: '10px', fontSize: '2em'}}> 
            <div className="col-sm-4"></div>
            <div className="col-sm-2"><NavLink className='text-light' to='/login'>Log In</NavLink></div>
            <div className="col-sm-2"><NavLink className='text-light' to='/register'>Register</NavLink></div>
            <div className="col-sm-4"></div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        logIn: state.logIn
    }
}

export default connect(mapStateToProps)(Navigation)


