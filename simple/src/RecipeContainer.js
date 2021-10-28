import React from 'react' 
import RecipeCard from './RecipeCard'
import Under500Cals from './Under500Cals'

function RecipeContainer({foods,skinnys}){
    return(
        <div>
        <ul className="cards">
        {foods.map( food => <RecipeCard  key={food.id}  food={food}/>)}
        {/* {skinnys.map( skinny => <RecipeCard key={skinny.id}  food={skinny}/>)} */}
        </ul>
    </div>
  );
}


export default RecipeContainer;