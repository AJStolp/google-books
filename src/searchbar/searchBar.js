import React from 'react'

const searchBar = (props) => {
        return (
            <div className='searchBar'>
                <form>
                    <label htmlFor='search' className='searchText'></label>
                    <input type='text' onChange={props.handleSearch} placeholder='Search Here' className='textInput'/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
}

export default searchBar