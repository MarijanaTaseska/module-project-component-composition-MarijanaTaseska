import React from "react"

export default function Figure({imgURL,caption}){
    return (
      <figure>
      <img src={imgURL}/>
      <figcaption>This image was taken on {caption}</figcaption>
      </figure>
    )
  }