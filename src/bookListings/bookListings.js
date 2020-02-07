import React from 'react'

const bookListings = (props) => {
        return (
            <div className='bookList' books={props.books}>
                <ul>
                    <li>{/* {books} */}</li>
                </ul>
            </div>
        )
}

export default bookListings