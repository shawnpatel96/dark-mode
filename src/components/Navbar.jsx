import React, { useState } from 'react';
import useDarkMode from "../hooks/useDarkMode"
import styled from "styled-components"
import {Link} from "react-router-dom";

const Button=styled.button`
background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

`
const Navbar = () => {
  const [darkMode, toggleDarkMode] = useDarkMode(true)
  // useState(false);
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };
  return (
    <nav className="navbar">
      <Link to="/graphs"><Button>Crypto Tracker</Button></Link>
      <Link to="/"><Button>Home</Button></Link>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleDarkMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
