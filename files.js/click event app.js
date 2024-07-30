import React from 'react'
import { useState } from 'react'
 export default function App(){
  const[state,setState]=useState('React Hooks')
  const handler=()=>{
    setState("Mouritech")
  }
 
 return(
  <>
  <h3>click event</h3>
  <h2>{state}</h2>
  <button onClick={handler}>clickme</button>
  </>
 )
}
