import React from 'react'
import { useState } from 'react'
export default function App() {
  const [state, setState]=useState(0)
  const a= () => {
      setState(state +1)
    }
  const b =()=>
     {
      setState(state -1)
    }
  return (
    <>
    <div style={{ textAlign: 'center',margin:'300px' }}>
      <button onClick={b} style={{backgroundColor:'black', width:'60px',color:'white'}}>-</button>
      <input placeholder={state} style={{textAlign:'center'}} ></input>
      <button onClick={a} style={{backgroundColor:'black',width:'60px', color:'white'}}>+</button>
    </div>
    </>
  )
}
 








