import React from 'react';
import SearchBar from '../searchbar/searchBar';
import TypeSelect from '../printTypeBookType/typeSelect';
import './searchFilterApp.css';

const searchFilterApp = (props) => {
    return (
            <div className='selections'>
                <SearchBar handleSearch={props.handleSearch} handleSubmit={props.handleSubmit}/>
                <TypeSelect handlePrintType={props.handlePrintType} handleFilterType={props.handleFilterType} className='typeType'/>
            </div>
        )
    }

export default searchFilterApp