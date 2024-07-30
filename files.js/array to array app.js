import React from 'react'
import {useState }from 'react'
 export default function App() {
   
    const [state,setState]=useState(["A","B","C"])
    const handler=()=>{
        setState(["X","Y","Z"])
}
    return  (
    <>
       <h3>click event</h3>
       <h2>{state}</h2>
       <button onClick={handler}>Click me</button>
 
    </>
    )
}

