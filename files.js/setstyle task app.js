import React from 'react';
import { useState } from 'react';
import './style.css'
export default function App(){
 
  const[style,setstyle]=useState('txt')
  const update=()=>{
    setstyle('txt1')
  }
  return(
  <>
  <h3 className={style}>Hello</h3>
  <br/>
  <button onClick={update}>update style </button>
  </>
  )
}