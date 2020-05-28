import React, { useState } from "react";
import "./App.css";
import Grid from './components/Grid'
import Controls from './components/Controls';
import About from './components/About';
function App() {
  return(
  <div className = 'app-cont'>
    <div className = 'home-title'>
    <h1>Game Of Life</h1>
    </div> 
    <div className = 'pages'>
    {/* <Controls/> */}
    <Grid/>
    <About/>
    </div>
    </div> //App div end
  )
}

export default App;
