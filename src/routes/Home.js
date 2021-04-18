import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'

export class Home extends PureComponent {
    render() {
        return (
            <div>
                <NavLink to='/listings'>Listings</NavLink>
                home
            </div>
        )
    }
}

export default Home
