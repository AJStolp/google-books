import React from 'react'
import './bookListings.css'

const bookListings = (props) => {
    const results = props.books.map( (value, i) => 
    <ul key={i} className='bookLists'>
        <li value={value.id} key={i}>
        <img src={value.volumeInfo.imageLinks.thumbnail} alt='book cover' className='thumbNails'/> {<br />}
            {value.volumeInfo.title}{<br />}
            {value.volumeInfo.authors}{<br />}
            <a href={value.selfLink} target='_blank' className='thumbNailsApi'>Google Books</a>{<br />}
        </li>
    </ul>);
        return (
                <section className='bookList'>
                    {results}
                </section>
        )
}

export default bookListings