import React, { useState } from "react"


function Home({food}){

    const [info, setInfo]= useState (true)
    const [foodLike,setFoodLike]=useState(food)

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
    <h1>hiiiiii</h1>
    // <div className= "card__content"> 
    //         <img width='200px'
    //           src ={food.image}
    //           alt={food.name}
    //           onClick={handleClick}
    //           />
    //          <p>{food.calories}</p>

    //             <p className="card__text">{info? food.ingredients : food.instructions}</p>
    //                 <p>{food.calories}</p>
    //                     <span>Give us a like or dislike if you tried out the meal</span>
    //                     <button onClick={handleLikes}></button> <button  onClick={handleDislikes}></button>
    //     </div>
)
}
export default Home;