import React from 'react'
import './searchBar.css';
const searchBar = (props) => {
        return (
            <div className='searchBar'>
                <form onSubmit={props.handleSubmit}>
                    <label htmlFor='search' className='searchText'></label>
                    <input type='text' onChange={props.handleSearch} placeholder='Search Here' className='textInput'/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
}

export default searchBar