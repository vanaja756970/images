import React from 'react';
import { useState } from 'react';
import './style.css'
export default function App() {
  const person={
    fname:'vicky',
    lname:'gudi',
    age:25
  }
  const[state,setState]=useState(person)
  const update=()=>{
   
    (state.fname=='vicky'? setState({fname:'vanaja'}):setState({fname:'vicky'}))  
  }
  return(
  <>
  <h3>first name is { state.fname } <br/> <button onClick={update} >update </button> </h3>
  </>
  )
}
 

