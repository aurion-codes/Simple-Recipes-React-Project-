import React, { useState } from "react"
// import RecipeList from "./RecipeList";



function Home({food}){
    console.log(food,"third")


return(
        <div >
            <img width='200px'
              src ={skinny.image}
              alt={food.name}
              />
             <p>{food.calories5}</p>

        </div>
   
)
}
   export default Home;