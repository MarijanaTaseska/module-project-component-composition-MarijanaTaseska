import React from "react"
import styled,{keyframes} from "styled-components"
const kf =keyframes`
50%{
  transform: scale(0.5);
}
100%{
  transform:scale(1);
  opacity: 1;
}
`
const StyledFigure = styled.figure`
width: 70%;
img{
  border: 5px solid purple;
  &:hover{
    transform: scale(1.2);
  }
}
figcaption{
text-align: center;
font-style:italic;
}
transform: scale(2);
opacity: 0;
animation: ${kf} 0.3s ease-in-out forwards;
`

export default function Figure({imgURL,caption}){
    return (
      <StyledFigure>
      <img src={imgURL}/>
      <figcaption>This image was taken on {caption}</figcaption>
      </StyledFigure>
    )
  }