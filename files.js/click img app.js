import React from 'react'
import pic from './images/nature 1.jpg'
import pic1 from './images/nature img2.jpg'
import  { useState } from 'react'
export default function App() {
 var a={
    b:<img src={pic} alt=""/>
 }
 var c={
    d:<img src={pic1} alt=""/>
 }
  const [state,setState]=useState(a.b)      
  const handler=()=>{
    setState(c.d)   }
  <img src={pic1} alt=""/>
  return (
    <>
    <h3>Click Event</h3>
    <h3>{state}</h3>
    <button onClick={handler}>Click Me</button>
    </>
  )
}

  



