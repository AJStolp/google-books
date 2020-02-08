import React from 'react'

const typeSelect = (props) => {
    return (
        <div>
            <form>
                <select onChange={this.handlePrintType}>
                    <option>All</option>
                    <option>Magazine</option>
                    <option>eBook</option>
                </select>
                <select onChange={this.handleTypeOfBook}>
                <option>Free</option>
                </select>
            </form>
        </div>
    )
}

export default typeSelect