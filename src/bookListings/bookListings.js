import React from 'react'

const bookListings = (props) => {
    const results = props.books.map( (value, i) => 
    <ul>
        <li value={value} key={i}>
            {value}
        </li>
    </ul>);
        return (
            <div className='bookList'>
               <section>
                    <ul>
                    {results}
                    </ul>
               </section>
            </div>
        )
}

export default bookListings