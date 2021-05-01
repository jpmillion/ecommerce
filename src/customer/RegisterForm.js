import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/fetchCustomer'
import LogInForm from '../forms/LogInForm';

class RegisterForm extends Component {

    state = {
        firstName: '',
        email: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.register(this.state.email, this.state.password, this.state.firstName);
        this.setState({
            email: '',
            password: '',
            firstName: ''
        })
    }

    render() {
        return (
            <LogInForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} email={this.state.email} password={this.state.password} firstName={this.state.firstName} />
        )
    }
}

export default connect(null, { register })(RegisterForm)
