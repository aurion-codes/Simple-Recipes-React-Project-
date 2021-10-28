import React from 'react' 
import RecipeCard from './RecipeCard'


function RecipeContainer({foods}){
 
    return(
     
        <div className="wrapper">
            {foods.map( food => <RecipeCard  key={food.id}  food={food}/>)}
        
      </div>
  );
}


export default RecipeContainer;