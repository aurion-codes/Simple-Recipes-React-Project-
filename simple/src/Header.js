import React from 'react'
import Home from './Home'
import Under500Cals from './Under500Cals'
function Header({foods}){
    return(
    <ul className="cards">
      {foods.map( food => <Home  key={food.id}  food={food}/>)}
      {foods.map( food => <Under500Cals key={food.id}  food={food}/>)}
    </ul>
  );
}
export default Header