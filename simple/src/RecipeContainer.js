import React from 'react' 
import RecipeCard from './RecipeCard'


function RecipeContainer({foods}){
    return(
     <div>
        <ul className="cards">
            {foods.map( food => <RecipeCard  key={food.id}  food={food}/>)}
        </ul>
    </div>
  );
}


export default RecipeContainer;