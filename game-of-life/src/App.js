import React, { useState } from "react";
import "./App.css";
import Grid from './components/Grid'
import About from './components/About';
import {Pages, AppCont, Title} from './components/styles'

function App() {
  
  return(
  <AppCont>
    <div className = 'home-title'>
    <Title>Game Of Life</Title>
    </div> 
    <Pages>

    <Grid/>
    <About/>

    </Pages>
    </AppCont> //App div end
  )
}

export default App;
