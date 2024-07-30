import React, { useState } from 'react'
export default function App(){
  const [state,setState]=useState([])
  fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      //.then(json => console.log(json))
      .then(json => setState(json))
  return (   
    <>       
      <h2>Hello</h2>
      {state.map((val)=><li>{val.title}</li>)}
    </>
  )
} 
 



