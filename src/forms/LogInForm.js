import React from 'react'

const LogInForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            Email: 
            <input onChange={props.handleChange} type='text' name='email' value={props.email} /><br></br>
            Password: 
            <input onChange={props.handleChange} type='password' name='password' value={props.password} /><br></br>
            <input type='submit' value='submit'/> 
        </form>
    )
}

export default LogInForm
