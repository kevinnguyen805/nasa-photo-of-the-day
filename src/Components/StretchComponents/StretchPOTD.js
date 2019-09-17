import React, {useState, useEffect} from 'react'
import axios from 'axios'
import StretchPOTDCard from './StretchPOTDCard'

function StretchPOTD(){

     const [stretchData, setStretchData] = useState([])

     useEffect( () => {
          axios
               .get(`https://api.nasa.gov/planetary/apod?api_key=REDACTED_NASA_API_KEY&date=2012-03-14`)
          .then(response => {
               console.log(response.data)
               const planetaryData = response.data
               setStretchData(planetaryData)
          })
          .catch(error => {
               console.log('The data was not received', error)
          })
     },[])

     return(
          <>   
           <StretchPOTDCard stretchData={stretchData}  /> 
          </>
     )
}
export default StretchPOTD