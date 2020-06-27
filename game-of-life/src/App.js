import React, { useState } from "react";
import "./App.css";
import Grid from './components/Grid'
import About from './components/About';
import {Pages, AppCont, Title} from './components/styles'

function App() {
  
  return(
  <AppCont>
    <div className = 'home-title'>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Special+Elite&display=swap');
</style>

</style>
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
