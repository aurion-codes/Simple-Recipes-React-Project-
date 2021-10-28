import React, { useState } from "react"
import styled from 'styled-components'


function RecipeCard ({food}){

    const [info, setInfo]= useState (true)
    const [foodLike,setFoodLike]=useState([food])

    function handleClick(){
        setInfo(!info)
    }

    function handleLikes(){
        const likes={...foodLike}
        likes.upvotes= likes.upvotes+1 
        setFoodLike(likes)
    }

    function handleDislikes(){
        const likes={...foodLike}
        likes.upvotes= likes.downvotes+1 
        setFoodLike(likes)
    }

    return(
   
        <div>
        <div className="card">
         <div className="card__body">
                <h2 className="card__title">{food.name}</h2>
                <img width="200px" className="image"
                src ={food.image}
                alt={food.name}
                onClick={handleClick}
                />
                <p>Calories {food.calories}</p>
                <p className="card__description">{info? food.ingredients : food.instructions}</p>
            </div>
                    {/* <p>{food.calories}</p> */}
                            <span>Give us a like or dislike if you tried out the meal</span>
                            <button className="card__btn" onClick={handleLikes}>👍</button> <button onClick={handleDislikes}>👎</button>
                            </div>
            </div>
            
    )
}
export default RecipeCard;