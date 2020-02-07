import React from 'react'

const typeSelect = (props) => {
    return (
        <div>
            <form>
                <select onChange={props.handlePrintType}>
                </select>

                <select onChange={props.handleTypeOfBook}>

                </select>
            </form>
        </div>
    )
}

export default typeSelect