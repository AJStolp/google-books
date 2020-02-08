import React from 'react'

const typeSelect = (props) => {
    return (
        <div>
            <form>
                <select onChange={event => props.handlePrintType(event.target.value)}>
                    <option>All</option>
                    <option>Magazine</option>
                    <option>Books</option>
                </select>
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