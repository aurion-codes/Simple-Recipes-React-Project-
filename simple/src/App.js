import { useState, useEffect} from "react"
import About from './About'
import { Route, Switch } from "react-router-dom"
import './App.css'
import NavBar from "./NavBar"
import RecipeContainer from "./RecipeContainer"
import Form from './Form'



function App() {
  const [entrees, setEntrees] = useState([])
  const [skinnys, setSkinnys] = useState([])
  const [filteredEntrees, setFilteredEntrees] = useState(entrees)
  const [formData, setFormData]=useState({
    "name":"",
    "ingredients":"",
    "instructions":"",
    "image":"",
    "upvotes":0,
    "downvotes":0


    })

  function handleSearch(e){
    const filteredEntrees = entrees.filter(entree => {
      return entree.name.includes(e.target.value)
    })

    setFilteredEntrees(filteredEntrees)
  }

function addNewRecipe(newRecipe){
  const updatedRecipe= [...entrees,newRecipe]
  setEntrees(updatedRecipe)


  fetch('http://localhost:3000/foods',{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({entrees: updatedRecipe, skinnys})})
    .then(response => response.json())
    .then(data => console.log(data))
  } 

    

 

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

        <Route exact path="/form">
          <Form formData={formData} setFormData={setFormData}addNewRecipe={addNewRecipe}/>
          </Route>


        <Route exact path ="/">
          <About/>
        </Route>

      </Switch>
    </div>
  );
 }

export default App
