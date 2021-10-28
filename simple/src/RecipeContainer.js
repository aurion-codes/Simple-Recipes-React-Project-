import React from 'react' 
import Home from './Home'
import Under500Cals from './Under500Cals'

function RecipeContainer({foods,skinnys}){
    return(
    <div>
    <ul className="cards">
      {foods.map( food => <Home  key={food.id}  food={food}/>)}
      {skinnys.map( skinny => <Under500Cals key={skinny.id}  skinny={skinny}/>)}
    </ul>
    </div>
  );
}


export default RecipeContainer;