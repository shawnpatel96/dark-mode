import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {BrowserRouter as Router, Route} from "react-router-dom"

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import styled from "styled-components"

import "./styles.scss";


const Header=styled.h1`
margin-top:10%;

`

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <Router>
    <div className="App">
     
      <Route exact path={["/", "/graphs"]} component={Navbar}/>
      <Route exact path ="/graphs" component={()=><Charts coinData={coinData}/>}/>
     
      {/*  <Charts coinData={coinData} /> */}
      {console.log(coinData)}
      <Header> WELCOME TO THE GREATEST CRYPTO TRACKING SITE EVER</Header>
    </div>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
