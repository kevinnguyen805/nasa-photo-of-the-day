import React from 'react'
import POTDCard from './POTDCard'

export default function POTD(){

     return(
          <>
          <div>Hello! I am parent component</div>
          { /*  Map the API array to get the content */}
          <POTDCard />
          </>
     )
}