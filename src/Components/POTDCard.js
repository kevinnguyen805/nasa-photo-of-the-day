import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
          font-family: 'Open Sans', sans-serif;
          color:white;
          max-width:1000px;
          line-height:25px;
          display:flex;
          justify-content:space-between;
          height:600px;
          text-align:center;
          align-items:center;
     `
const Picture = styled.img`
          width:100%;
     `

const PictureContainer = styled.div`
     max-width:60%;
`

const ContentContainer = styled.div`
     max-width:38%;
     display:flex;
     justify-content:center;
     flex-wrap:wrap;
     height:400px;
     overflow:scroll;
     text-align:center;
     padding:20px;
`
const ExplanationContainer = styled.div`
     text-align:justify;
`


const POTDCard = props => {
     // props is an object passing another object
     // access props to info and then access items in the object
console.log(props.info.url)
     return (
          <Container>
               <ContentContainer>
                    <h3>{props.info.title} <br /> {props.info.date} </h3>
                    <ExplanationContainer>
                         <p>{props.info.explanation}</p>
                         <span><p>CopyRight: {props.info.copyright}</p></span>
                    </ExplanationContainer>
               </ContentContainer>
               <PictureContainer>
                    <Picture src={props.info.hdurl} alt="NASA of the day" />
               </PictureContainer>
          </Container>
     )
}

export default POTDCard