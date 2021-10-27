import { useState, useEffect} from "react"
import ReactDOM from 'react-dom'
import Home from './Home'
import About from './About'
import Under500Cals from "./Under500Cals"
import { Route, Switch } from "react-router-dom"
// import logo from './logo.svg';
// import './App.css';
import Header from "./Header"

function App() {
  const [foods, setFoods] = useState([])
  console.log(foods)
  // const [skinnys, setSkinnys] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/recipe")
    .then(response => response.json())
    .then(data => setFoods(data))
    // fetch("http://localhost:3000/skinny")
    // .then(response =>response.json())
    // .then(data => setSkinnys(data))
  },[])
  console.log(foods,"first")
  console.log(skinnys,"first")


 return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App