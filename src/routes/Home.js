import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'

export class Home extends PureComponent {
    render() {
        return (
            <div>
                <NavLink to='/listings'>Listings</NavLink>
                <NavLink to='/login'>Log In</NavLink>
                <NavLink to='/register'>Register</NavLink>
            </div>
        )
    }
}

export default Home
