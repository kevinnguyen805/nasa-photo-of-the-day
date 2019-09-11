import React from 'react';

const POTDCard = props => {

     // props is an object passing another object
     // access props to info and then access items in the object
console.log(props.info.url)
     return (
          <div className="container">
               <div className="photo">
                    <img src={props.info.hdurl} alt="NASA of the day" />
               </div>
               <div className="photoContent">
                    <h3>{props.info.title}</h3>
                    <p>{props.info.date}</p>
                    <p>{props.info.explanation}</p>
                    <span><p>{props.info.copyright}</p></span>
               </div>
          </div>
     )
}

export default POTDCard