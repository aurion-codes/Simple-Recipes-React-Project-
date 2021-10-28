
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
        to="/home"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
        >
        </NavLink>
        
        About
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
      </NavLink>

      Under500Cals
      <NavLink
        to="/Under500Cals"
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