import React from "react";
import "./App.css";
import POTD from './Components/POTD'
import StretchPOTD from './Components/StretchComponents/StretchPOTD'

function App() {
  return (
    <div className="App">
      <h1>Astronomy Photo of the Day</h1>
        <POTD />
      <h2>Stretch : Astronomy Photo of the Day</h2>
        <StretchPOTD />
    </div>
  ); 
}

export default App;

/*
background color - black white black gradient


APP -> COMPONENT PARENT (CONTAINS API + IMAGE + COMPONENT*CONTENT* ) -> COMPONENT CHILD (CONTAINS CONTENT)

*/