import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchCustomer, register } from '../actions/fetchCustomer';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class LogIn extends PureComponent {

    state = {
        email: '',
        password: '',
        firstName: ''
    }

    get route() {
        return this.props.match.url
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.route === '/login' ? this.props.fetchCustomer(this.state.email, this.state.password) : this.props.register(this.state.email, this.state.password, this.state.firstName);
        this.setState({
            email: '',
            password: '',
            firstName: ''
        })
    }

    redirectOnLogIn = () => {
        if (this.props.loggedIn) return <Redirect to='/ecommerce'/>
        
        const firstNameInput = this.route === '/register' ? <input onChange={this.handleChange} placeholder='First Name' type='text' name='firstName' value={this.state.firstName} /> : ''
        
        return (
            <form className='text-center text-light' onSubmit={this.handleSubmit}>
                {firstNameInput}<br></br> 
                <input onChange={this.handleChange} placeholder='Email' type='text' name='email' value={this.state.email} /><br></br> 
                <input onChange={this.handleChange} placeholder='Password' type='password' name='password' value={this.state.password} /><br></br><br></br>
                <input type='submit' value='submit'/><br></br>or<br></br> <NavLink to='/ecommerce' >Go Back</NavLink>
            </form>
        )
    }

    render() {
        return (
            this.redirectOnLogIn()
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.logIn
    }
}

export default connect(mapStateToProps, { fetchCustomer, register })(LogIn)
