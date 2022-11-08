import React from 'react';

function Fruitlist (props) {

    return(
        <ul>
            {props.fruits.map(fruit => {
                return <li>{fruit}</li>
            })}
        </ul>
    )
}

export default Fruitlist;