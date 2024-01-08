import React from "react"
import Figure from "./Figure"
import styled,{keyframes} from "styled-components"

const kf = keyframes`
100%{
  opacity: 1;
  transform: scale(1) rotateZ(0);
}
`
const StyledCard = styled.div`
margin:1rem;
padding: 1rem;
border:3px solid purple;
h1{
  font-size:2rem;
  text-decoration: solid underline purple 4px;
  opacity: 0;
  transform: scale(2) rotateZ(360deg);
  animation:${kf} 0.5s ease-in-out forwards;
};
p{
  padding:0.5rem;
  &::first-line{
font-style:italic;
}
};

`

export default function Card({title,text,imgURL,date}){
    return(
      <StyledCard className='Card'>
        <h1>{title}</h1>
        <p>{text}</p>  
      <Figure 
      imgURL={imgURL}
      caption ={date}
      />
        </StyledCard>
    )
  }