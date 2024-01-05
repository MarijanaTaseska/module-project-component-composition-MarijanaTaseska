import React from "react"
import Figure from "./Figure"

export default function Card({title,text,imgURL,date}){
    return(
      <div className='Card'>
        <h1>{title}</h1>
        <p>{text}</p>  
      <Figure 
      imgURL={imgURL}
      caption ={date}
      />
        </div>
    )
  }