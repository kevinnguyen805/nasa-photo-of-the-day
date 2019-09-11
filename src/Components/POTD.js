import React, { useState, useEffect} from 'react'
import POTDCard from './POTDCard';
import axios from 'axios'

export default function POTD(){

     const [data, setData] = useState([])
  
     
     useEffect( () => {
          axios.get(`https://api.nasa.gov/planetary/apod?api_key=C0c78CXfKQ5OLSP4oq8t4MBBFZAWwiqsgP4aSzzL`)
          .then(response => {
               const nasaData = response.data;
               setData(nasaData);
          })
          .catch(error => {
               console.log('Data was not recieved', error)
          })
     },[])


     // remember that { data } contains the {objectData}
     // passing {objectData} as props means { {objectData} }
     return(
          <>
          <POTDCard info={data} />
          </>
     )
}