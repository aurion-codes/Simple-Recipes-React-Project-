
import React from "react";
import { NavLink } from "react-router-dom"


const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar(){
  return(
    <div >

      Home
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
        >
        </NavLink>
        
        Entrees
      <NavLink
        to="/entrees"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
      </NavLink>

      Under500Cals
      <NavLink
        to="/under500Cals"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
      </NavLink>

    </div>
  )
}
export default NavBar;