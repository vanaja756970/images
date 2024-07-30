import React from 'react'
export default function App() {
const num=[1,2,3,4,5]
  return (
    <>
    <h2>App</h2>
      {num.map((x)=><li>{x*2}</li>)}
    </>
  )
}