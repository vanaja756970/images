import React from 'react'
import { useState } from 'react'
import pic from './images/logo192.png'
export default function App() {
  const [state, setState] = useState()
  const handler = (e) => {
    setState(e.target.value)
  }
  return (
    <>
     <h1>Controlled component</h1>
     <img width={state}src={pic} alt="" ></img>
      <h1>You selected <span style={{ color: 'red' }}>{state}</span></h1>
     <select onChange={handler}  >
       <option>200px</option>
        <option>300px</option>
        <option>400px</option>
        <option>500px</option>
        <option>600px</option>
      </select>
  </>
  )
}

   
 