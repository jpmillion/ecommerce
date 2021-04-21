import React, { PureComponent } from 'react'
import TrendingListings from '../listingComponents/TrendingListings'

class CustomerContainer extends PureComponent {
    render() {
        return (
            <div>
                <TrendingListings />
            </div>
        )
    }
}

export default CustomerContainer
