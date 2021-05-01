import React from 'react'

const LogInForm = (props) => {
    return (
        <form className='text-center' onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} placeholder='First Name' type='text' name='firstName' value={props.firstName} /><br></br> 
            <input onChange={props.handleChange} placeholder='Email' type='text' name='email' value={props.email} /><br></br> 
            <input onChange={props.handleChange} placeholder='Password' type='password' name='password' value={props.password} /><br></br>
            <input type='submit' value='submit'/> 
        </form>
    )
}

export default LogInForm
