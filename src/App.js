import React from "react";
import POTD from './Components/POTD'
import StretchPOTD from './Components/StretchComponents/StretchPOTD'
import styled from 'styled-components'

const App = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`
const POTDTitle = styled.h1`
  font-family: 'Cabin', sans-serif;
  font-weight:600;
`

function App() {
  return (
    <App>
      <POTDTitle>Astronomy Photo of the Day</POTDTitle>
        <POTD />
      <POTDTitle>Stretch : Astronomy Photo of the Day</POTDTitle>
        <StretchPOTD />
    </App>
  ); 
}

export default App;

/*
background color - black white black gradient


APP -> COMPONENT PARENT (CONTAINS API + IMAGE + COMPONENT*CONTENT* ) -> COMPONENT CHILD (CONTAINS CONTENT)

*/