import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { fetchCustomer } from '../actions/fetchCustomer'

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

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Email: 
               <input onChange={this.handleChange} type='text' name='email' value={this.state.email} /><br></br>
               Password: 
               <input onChange={this.handleChange} type='password' name='password' value={this.state.password} /><br></br>
               <input type='submit' value='submit'/> 
            </form>
        )
    }
}

export default connect(null, { fetchCustomer })(LogIn)
