import React, { useState, useEffect} from 'react'
import POTDCard from './POTDCard';
import axios from 'axios'

export default function POTD(){

     const [data, setData] = useState([])
  
     
     useEffect( () => {
          axios.get(`https://api.nasa.gov/planetary/apod?api_key=REDACTED_NASA_API_KEY`)
          .then(response => {
               console.log(response.data)
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
          <POTDCard 
               info={data}
          />
          </>
     )
}
/*

credits={item.copyright} 
date={item.date}
explanation={item.explanation}
link={item.hdurl}
title={item.title}

*/