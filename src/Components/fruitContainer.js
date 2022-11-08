import React, { useState } from "react";
import FruitFilter from "./fruitFilter.js";
import FruitList from "./fruitList.js";


const FruitContainer = (props) => {
    const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits);
    const [unmatchedFruitsToDisplay, setUnmatchedFruitsToDisplay] = useState([])

    const handleFilterChange = (event) => {
        const filterValue = event.target.value;

        const filteredFruitList = props.fruits.filter(fruit => {
            return fruit.toLowerCase().includes(filterValue.toLowerCase())
        }) 

        const unmatchedFruitList = props.fruits.filter(fruit => {
            return !fruit.toLowerCase().includes(filterValue.toLowerCase())
        }) 
        
        setFruitsToDisplay(filteredFruitList);
        setUnmatchedFruitsToDisplay(unmatchedFruitList);
    }

    return(
        <div>
            <FruitFilter handleFilterChange = {handleFilterChange}/>
            <FruitList fruits = {fruitsToDisplay}/>
            <FruitList fruits = {unmatchedFruitsToDisplay}/>
        </div>
    )
}

export default FruitContainer;