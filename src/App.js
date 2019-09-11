import React from "react";
import "./App.css";
import POTD from './Components/POTD'

function App() {
  return (
    <div className="App">
 
        <POTD />
    
     
    </div>
  ); 
}

export default App;

/*
background color - black white black gradient

Prototype notes
- copyright
- date
- explanation
- hdurl - https:// url
- media_type (image)
- service_version: ???
- title
- url - regular url

APP -> COMPONENT PARENT (CONTAINS API + IMAGE + COMPONENT*CONTENT* ) -> COMPONENT CHILD (CONTAINS CONTENT)

*/