import React, { useState } from "react"
// import RecipeList from "./RecipeList";



function Under500Cals({food}){
    console.log(food,"third")

    const [info, setInfo]= useState (true)
const [foodLike,setFoodLike]=useState(food)


    function handleClick(){
        setInfo(!info)
    }

    function handleLikes(){
        const likes={...foodLike}
        likes.upvotes= likes.upvotes + 1 
        setFoodLike(likes)
    }

    function handleDislikes(){
        const likes={...foodLike}
        likes.upvotes= likes.downvotes + 1 
        setFoodLike(likes)
    }
return(
        // <div className= "card__content"> 
        <li>
            <center>
            <h3>{food.name}</h3>
            <img width='200px'
              src ={food.image}
              alt={food.name}
              onClick={handleClick}
              />
             

                <p className="card__text">{info? food.ingredients : food.instructions}</p>
                    <p>{food.calories} Calories</p>
                        <span>Give us a like or dislike if you tried out the meal</span>
                        <button onClick={handleLikes}>👍</button> <button  onClick={handleDislikes}>👎</button>
                        </center>
       </li>
   
)
}
   export default Under500Cals;

