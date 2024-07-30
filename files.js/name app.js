import React from 'react'
import Comp1 from './Comp1'
import  './style.css'
export default function App() {
   const data=['Apple','Banana','Cherry','Mango']
 
  return (
    <>
   <Comp1 data={data}/>
    </>
  )
}