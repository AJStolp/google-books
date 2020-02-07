import React from 'react';
import SearchBar from '../searchbar/searchBar';
// import BookListing from '../bookListings/bookListings';
import TypeSelect from '../printTypeBookType/typeSelect';

const searchFilterApp = (props) => {
    return (
            <div>
                <SearchBar handleSearch={props.handleSearch}/>
                {/* <BookListing /> */}
                <TypeSelect handlePrintType={props.handlePrintType} handleBookType={props.handleBookType}/>
            </div>
        )
    }

export default searchFilterApp