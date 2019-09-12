import React from 'react'
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


function StretchPOTDCard(props){
     const stretchData = props.stretchData
     console.log(props)
   
     return(
          <Container>
               <PictureContainer>
                 <Picture src={stretchData.hdurl} alt="sun"/>
               </PictureContainer>
               <ContentContainer>
                    <h3>{stretchData.title}<br />{stretchData.date} </h3>
                    <ExplanationContainer>
                         <p>{stretchData.explanation}</p>
                         <span><p>Copyright: <br/> {stretchData.copyright}</p></span>
                    </ExplanationContainer>
               </ContentContainer>
          </Container>
     )
}
export default StretchPOTDCard