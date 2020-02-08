import React from 'react';
import SearchBar from '../searchbar/searchBar';
import TypeSelect from '../printTypeBookType/typeSelect';

const searchFilterApp = (props) => {
    return (
            <div>
                <SearchBar handleSearch={props.handleSearch} handleSubmit={props.handleSubmit}/>
                <TypeSelect handlePrintType={props.handlePrintType} handleFilterType={props.handleFilterType}/>
            </div>
        )
    }

export default searchFilterApp