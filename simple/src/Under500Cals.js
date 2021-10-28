import React, { useState } from "react"
// import RecipeList from "./RecipeList";

const [info, setInfo]= useState (true)
const [foodLike,setFoodLike]=useState(skinny)


function Home({skinny}){
    console.log(food,"third")

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
        <div className= "card__content"> >
            <img width='200px'
              src ={skinny.image}
              alt={skinny.name}
              onClick={handleClick}
              />
             <p>{skinny.calories}</p>

                <p className="card__text">{info? skinny.ingredients : skinny.instructions}</p>
                    <p>{skinny.calories}</p>
                        <span>Give us a like or dislike if you tried out the meal</span>
                        <button onClick={handleLikes}></button> <button  onClick={handleDislikes}></button>
        </div>
   
)
}
   export default Home;

