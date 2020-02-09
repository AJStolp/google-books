import React from 'react'

const bookListings = (props) => {
    const results = props.books.items.map( val => val.volumeInfo.title);
        return (
            <div className='bookList'>
               <section>
                {/* {results} */}
               </section>
            </div>
        )
}

export default bookListings