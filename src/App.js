import React from "react";
import POTD from './Components/POTD'
import StretchPOTD from './Components/StretchComponents/StretchPOTD'
import styled from 'styled-components'

const AppBody = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  margin:auto;
  background-color:#011628;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  background-image:radial-gradient(white 1%, transparent 4%),radial-gradient(white 1%, transparent 4%);
  background-position: 0px 0px, 50px 20px;
  background-size: 20px 25px;
`
const POTDTitle = styled.h1`
  font-family: 'Aldrich', sans-serif;
  font-size:4rem;
  color:white;
  margin-bottom:0;
`

function App() {
  return (
    <AppBody>
      <POTDTitle>Astronomy Photo of the Day</POTDTitle>
        <POTD />
      <POTDTitle>Bonus Photo of the Day</POTDTitle>
        <StretchPOTD />
    </AppBody>
  ); 
}

export default App;

/*
background color - black white black gradient


APP -> COMPONENT PARENT (CONTAINS API + IMAGE + COMPONENT*CONTENT* ) -> COMPONENT CHILD (CONTAINS CONTENT)

*/