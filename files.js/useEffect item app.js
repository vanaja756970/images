import React from 'react'
import  { useState,useEffect } from 'react'
//import { useState } from 'react'
export default function App(){
  const [state,setState]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    //.then(json=>console.log(json))
    .then(json=>setState(json))
  })
      
  return (    
   <> 
   <h2>Hello vicky</h2>     
   {state.map((item)=><li>{item.title}</li>)}
   </>
  )  
}
 
 

 