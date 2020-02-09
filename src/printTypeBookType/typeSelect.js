import React from 'react'

const typeSelect = (props) => {
    return (
        <div>
            <form>
                <h3>Book Type</h3>
                <select onChange={event => props.handlePrintType(event.target.value)}>
                    <option>All</option>
                    <option>magazines</option>
                    <option>Books</option>
                </select>
                <h3>Print Type</h3>
                <select onChange={e => props.handleFilterType(e.target.value)}>
                    <option>full</option>
                    <option>ebooks</option>
                    <option>paid-ebooks</option>
                    <option>free-ebooks</option>
                </select>
            </form>
        </div>
    )
}

export default typeSelect