import React from 'react'
export default function App() {
const city=['hyderabd','banglore','miyapur','hitech']
  return (
    <>
    <table border='2px'>
      <tr>
        <th>city</th>
      </tr>
      {city.map((x)=><tr><td>{x}</td></tr>)}
    </table>
    </>
  )
}