import React from 'react'
import SearchBar from './searchBar/searchBar'
import BookListing from './bookListings/bookListings'

class searchFilterApp extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <BookListing />
            </div>
        )
    }
}

export default searchFilterApp