import { useState, useEffect} from "react"
import Home from './Home'
import About from './About'
import Under500Cals from "./Under500Cals"
import { Route, Switch } from "react-router-dom"
// import logo from './logo.svg';
// import './App.css';
import NavBar from "./NavBar"

function App() {
  const [foods, setFoods] = useState([])
  const [skinnys, setSkinnys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/recipe")
    .then(response => response.json())
    .then(data => setFoods(data))

    console.log(foods,'first')


    fetch("http://localhost:3000/skinny")
    .then(response =>response.json())
    .then(data => setSkinnys(data))
  },[])

 
 
 return (
    <div>
      <NavBar />
      <Switch>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/under500Cals">
          <Under500Cals />
        </Route>

        <Route exact path ="/">
          <Home />
        </Route>

      </Switch>
    </div>
  );
 }

export default App
