import React, { useState, useEffect} from "react"
// import logo from './logo.svg';
// import './App.css';
import Header from "./Header"
import RecipeContainer from "./RecipeContainer"


function App() {
  const [foods, setFoods] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/recipe")
    .then(response => response.json())
    .then(data => setFoods(data))
  },[])

  console.log(foods,"first")

  return (
    <div>

     
      <RecipeContainer foods={foods}/>
      
    </div>
  );
}

export default App;