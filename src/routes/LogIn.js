import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchCustomer } from '../actions/fetchCustomer';
import { Redirect } from 'react-router-dom';
import LogInForm from '../forms/LogInForm';

class LogIn extends PureComponent {

    state = {
        email: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        console.log('handle submit')
        e.preventDefault();
        this.props.fetchCustomer(this.state.email);
        this.setState({
            email: ''
        })
    }

    redirectOnLogIn = () => {
        if (this.props.loggedIn) {
            return <Redirect to='/'/>
        }
        return (
            <LogInForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} email={this.state.email} password={this.state.password} />
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

export default connect(mapStateToProps, { fetchCustomer })(LogIn)
