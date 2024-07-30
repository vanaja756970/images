import React from 'react'
import  { useState,useEffect } from 'react'
//import { useState } from 'react'
export default function App(){
  const [state,setState]=useState(0)
  useEffect(()=>{
    console.log("component mounted")
  })
  const handler=()=>
    setState(state+1)
  return (
   <>
   <h2>Hello vicky</h2> 
   <h3>{state}</h3>
   <button onClick={handler}>update</button>
   </>
  )
}
 
 

 