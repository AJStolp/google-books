import React from 'react'

class searchBar extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='searchBar'>
                <form>
                    <label for='search'>Search:</label>
                    <input 
                    type='text'
                    value='' 
                    placeholder='Search For Books Here'
                    name='search'
                    />Search
                    <button name='submit' vlaue='submit'></button>
                </form>
            </div>
        )
    }
}

export default searchBar