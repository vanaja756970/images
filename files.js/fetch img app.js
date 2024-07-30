import React from 'react'
import { useState } from 'react'
export default function App() {
  const[state,setState]=useState([])
  fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(json => setState(json))
  return (
   <>
   <h2>Hello</h2>
   <table border='2px'>
    <tr><td> Id</td>
      <td>Title</td> 
      <td>images</td>
    </tr>
   {state.map((val)=>
   <tr>
    <td>{val.id}</td>
    <td>{val.title}</td>
    <td>{<img src={val.url}/>}</td> 
    </tr>
   )}
    </table>
   </>
  )
}
 
 

 