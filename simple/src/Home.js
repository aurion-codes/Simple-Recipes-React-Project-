import React, { useState } from "react"


function Home({food}){

// function handleLikes({

// })

// functionDislikes (){

// }
// function handleClick(){

// }



console.log (food,"second")


return(
    <ul className="cards__items">
        <div className="card">
<h2>{food.name}</h2>
<img width= '200px' src={food.image} />
        </div>
    </ul>
)
}
 
export default Home;
