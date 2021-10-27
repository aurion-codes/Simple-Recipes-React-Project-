import React, { useState, useEffect, route} from "react"
// import logo from './logo.svg';
// import './App.css';
import Header from "./Header"
import RecipeContainer from "./RecipeContainer"


function App() {
  const [foods, setFoods] = useState([])
  const [skinnys, setSkinnys] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/recipe")
    .then(response => response.json())
    .then(data => setFoods(data))

    fetch("http://localhost:3000/skinny")
    .then(response =>response.json())
    .then(data => setSkinnys(data))
  },[])

  console.log(foods,"first")
  console.log(skinnys,"first")

  ReactDOM.render(
<BrowserRouter>
<Switch>
      <Route exact path = "/">
      <Home foods={foods}/>
      </Route>

      <Route path ="/about">
      <About />
      </Route>

      <Route path ="/under500Cals">
      <Under500Cals />
      </Route >
  </Switch>
  </BrowserRouter>
 document.getElementById('root')
 );
  );


export default App;