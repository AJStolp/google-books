import React from 'react';
import SearchBar from '../searchbar/searchBar';
// // import BookListing from '../bookListings/bookListings';

const searchFilterApp = (props) => {
    return (
            <div>
                <SearchBar handleSearch={props.handleSearch}/>
            </div>
        )
    }

export default searchFilterApp