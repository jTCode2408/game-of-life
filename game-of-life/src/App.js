import React, { useState } from "react";
import "./App.css";
import Grid from './components/Grid'
import Controls from './components/Controls';

function App() {


  return(
  <div>
    <h1>Game Of Life</h1>
    <Controls/>
    <Grid/>
    </div> //App div end
  )
}

export default App;
