import React, { useState } from "react"
import RecipeList from "./RecipeList";

const[foods, setfoods]= useState ()

function Home(){

function handleLikes({

})

functionDislikes (){

}
function handleClick(){

}

return(
    <li className="cards__items">
        <div className="card">
            <img
              src ={recipe.image}
              alt={recipe.name}
              className=
              onClick={handleClick}
              />
              <div className= "card__content">
                <div className= "card__title">{}</div>
                <p className="card__text">{? recipe.ingrediants : recipe.instructions}</p>
                <div className="card__detail">
                    <p>{recipe.calories}<p>
                    <p>
                        Give us a like or dislike if you tried out the meal{" like or dislike button "}
                    </p>
                </div>
        </div>
    </li>
)
}
 
export default Home;
