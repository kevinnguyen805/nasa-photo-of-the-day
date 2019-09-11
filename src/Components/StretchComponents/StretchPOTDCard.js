import React from 'react'

function StretchPOTDCard(props){
     const stretchData = props.stretchData
     console.log(props)
   
     return(
          <div>
               <img src={stretchData.hdurl} alt="sun"/>
               <h3>{stretchData.title}</h3>
               <p>{stretchData.date}</p>
               <p>{stretchData.explanation}</p>
               <span><p>Copyright: {stretchData.copyright}</p></span>
          </div>
     )
}
export default StretchPOTDCard