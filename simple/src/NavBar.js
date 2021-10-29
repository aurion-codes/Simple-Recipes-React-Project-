
import React from "react";
import { NavLink } from "react-router-dom"


const linkStyles = {
  display: "inline-block",
  // width: "30px",
  padding: "15px",
  margin: "5px",
  background: "pink",
  textdecoration: "none",
  
};

function NavBar(){
  return(
    <div >

 
      <NavLink 

          to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "green",
        }} 
        >About
        </NavLink>
        
        
      <NavLink className="nav"
      
        to="/entrees"
        exact
        style={linkStyles}
        activeStyle={{
          background: "yellow",
        }}
      > Recipes
      </NavLink>      

      {/* Under500Cals */}
      <NavLink className="nav"
       Under500Cals
        to="/under500Cals"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >Under 500 Cals
      </NavLink>

      <NavLink className="nav"
          Add Recipe
        to="/Form"
        exact
        style={linkStyles}
        acticeSyle={{
          background:"black"
        }}
        >Add Recipe
      </NavLink>

    </div>
  )
}
export default NavBar;