import { useState, useEffect} from "react"
import About from './About'
import { Route, Switch } from "react-router-dom"
import './App.css'
import NavBar from "./NavBar"
import RecipeContainer from "./RecipeContainer"



function App() {
  const [entrees, setEntrees] = useState([])
  const [skinnys, setSkinnys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/foods")
    .then(response => response.json())
    .then(data => {
      setEntrees([...data.entrees])
      setSkinnys([...data.skinnys])
    })

  },[])

 
 
 return (
    <div>
      <NavBar />
      <Switch>


        <Route exact path="/entrees">
          <RecipeContainer foods={entrees} />
        </Route> 

        <Route exact path="/under500Cals">
          <RecipeContainer foods={skinnys} />
        </Route>

        <Route exact path ="/">
          <About/>
        </Route>

      </Switch>
    </div>
  );
 }

export default App
