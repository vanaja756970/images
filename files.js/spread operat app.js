import React from 'react';
import { useState } from 'react';
import './style.css'
export default function App(){    
  const person={
    fname:'vicky',
    lname:'gudi',
    age:25
  }   
  const[state,setState]=useState(person)  
  const update=()=>{
    setState({...state,fname:'vanaja'})
    
  }
  return(
  <>
  <h3>first name is {state.fname}  and last name is {state.lname}</h3>
  <br/>
  <button onClick={update} >update </button>
  </>
  )
}
 
