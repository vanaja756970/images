import React, { useMemo } from 'react'
import { useState } from 'react'
export default function App() {
  const [state, setState]= useState(0)
  const [state1, setState1]= useState(100)
  function vanaja(){
    setState(state+1)
  }
  function vicky(){
    setState1(state1-1)
  }
  // function allah(){
  //   console.log ("hello")
  //   return state*5
  // }
  const Multiplication=useMemo(function multiply(){
    console.log('hello')
    return state*10}, [state])
 
  return (
 <>
<h1>{Multiplication}</h1>
 <button onClick={vanaja} >Add</button> {state}
 <br></br>
 <button onClick={vicky} >Del</button> {state1}
 </>
  )
}
 
