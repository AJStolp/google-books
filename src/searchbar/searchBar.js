import React from 'react'
import './searchBar.css'

const searchBar = (props) => {
        return (
            <div className='searchBar'>
                <form>
                    <label htmlFor='search' className='searchText'>Search:</label>
                    <input type='text' onChange={props.handleSearch}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
}

export default searchBar