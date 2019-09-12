import React from 'react';
import styled from 'styled-components'

const POTDCard = props => {

     const Container = styled.div`
          font-family: 'Open Sans', sans-serif;
     `
     const Picture = styled.img`
          width:100%;
     `

     // props is an object passing another object
     // access props to info and then access items in the object
console.log(props.info.url)
     return (
          <Container>
               <div className="photo">
                    <Picture src={props.info.hdurl} alt="NASA of the day" />
               </div>
               <div className="photoContent">
                    <h3>{props.info.title}</h3>
                    <p>{props.info.date}</p>
                    <p>{props.info.explanation}</p>
                    <span><p>CopyRight: {props.info.copyright}</p></span>
               </div>
          </Container>
     )
}

export default POTDCard