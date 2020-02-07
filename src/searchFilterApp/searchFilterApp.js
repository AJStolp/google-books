import React from 'react';
import SearchBar from '../searchbar/searchBar';
import TypeSelect from '../printTypeBookType/typeSelect';

const searchFilterApp = (props) => {
    return (
            <div>
                <SearchBar handleSearch={props.handleSearch}/>
                <TypeSelect handlePrintType={props.handlePrintType} handleBookType={props.handleBookType}/>
            </div>
        )
    }

export default searchFilterApp