import React, { useState,useEffect } from 'react'
import './data.json'
export default function App(){
  const [state,setState]=useState([])
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=50')
      .then(res =>res.json())
      .then(json =>setState(json.results))
      //.then(json =>console.log(json))
 }, [])
  
  return (   
    <>       
      <h2>Hello</h2>
      {state.map((result)=><li>{result.gender}</li>)}
    </>
  )
} 

      


