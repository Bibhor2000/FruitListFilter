import React from "react";

const FruitFilter = props => {
    <div>
        <label>Filter these Fruits</label>
        <input type = 'text' onChange = {props.handleFilterChange} />
    </div>
}

export default FruitFilter;