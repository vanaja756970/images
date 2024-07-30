import React, { useState } from 'react'
import pic from './images/nature 1.jpg'
export default function App() {
  const [state,setState]=useState('img')
  function test(){
    if(state==='img'){
    setState('img1')
    }else{
      setState('img')  
    }
  }
  return (
    <>
      <img src={pic} alt='' className={state}/>
      <br/><br/>
      <button onClick={test}>rotate</button>
    </>
  )
}
