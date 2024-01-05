import React,{useState,useEffect} from 'react'
import axios from 'axios'
const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
import Card from './Card'

function App() {
  const [apod,setApod]=useState()
  useEffect(()=>{
   function fetchPhoto(){
    axios.get(URL)
    .then(res =>{
    console.log(res.data)
    setApod(res.data)
    })
    .catch(err =>{
      console.log(err.message)
    })
   }
 //fetchPhoto() //<<<<+++++====INVOKE THE FUNCTION
 setApod({
      "date": "2024-01-05",
      "explanation": "Near the center of this sharp cosmic portrait, at the heart of the Orion Nebula, are four hot, massive stars known as the Trapezium. Gathered within a region about 1.5 light-years in radius, they dominate the core of the dense Orion Nebula Star Cluster. Ultraviolet ionizing radiation from the Trapezium stars, mostly from the brightest star Theta-1 Orionis C powers the complex star forming region's entire visible glow. About three million years old, the Orion Nebula Cluster was even more compact ...",
      "hdurl": "https://apod.nasa.gov/apod/image/2401/Image964.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Trapezium: At the Heart of Orion",
      "url": "https://apod.nasa.gov/apod/image/2401/Image964_1024.jpg"
    })

},[])
if(!apod) return "Fetching photo of the Day ..."
  return (
    <section>
      <Card title={apod.title} text={apod.explanation} imgURL={apod.url} date={apod.date}/>
    </section>
   
  )
}

export default App
