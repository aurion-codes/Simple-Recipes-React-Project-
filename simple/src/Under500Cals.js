import React, { useState } from "react"
// import RecipeList from "./RecipeList";



function Home({food}){
    console.log(food,"third")


return(
<li>
        <div >
            <img width='200px'
              src ={food.image}
              alt={food.name}
              />
             <p>{food.calories5}<p>

            //   className=
            //   onClick={handleClick}
              
              {/* <div className= "card__content">
                <div className= "card__title">{}</div>
                <p className="card__text">{? food.ingredients : food.instructions}</p>
                <div className="card__detail">
                    <p>{food.calories}<p>
                    <p>
                        Give us a like or dislike if you tried out the meal{" like or dislike button "}
                    </p> */}
                {/* </div> */}
        </div>
    </li>
)
}
   export default Home;