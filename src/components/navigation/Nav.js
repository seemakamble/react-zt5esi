import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/display" ></NavLink></li>
        <li>
          <NavLink to="home">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="login">Login Page</NavLink>
        </li>
        <li>
          <NavLink to="about">About Page</NavLink>
        </li>
        <NavLink to="customer" >Customer Page</NavLink>
        <li>
        
        </li>
      </ul>
    </div>
  );
};
export default Nav;
