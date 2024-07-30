import React from 'react'
import { useState} from 'react'
 function App() {
  const [state,setState]=useState("mouritech")
  const [name,setName]=useState("vanaja")
  return ( 
     <>
     <h3>ReactHooks</h3>
     <h3>useState</h3>
     <h1>{state}</h1>
     <h2>{name}</h2>
    </>
  )
}
     export default App