import React from 'react'
import { useState } from 'react'
export default function App() {
const person=[{
  name:'vicky',
  place:'hydrabad',
  age:20
},
{
  name:'vanaja',
  place:'banglore',
  age:22
},
{
    name:'appu',
    place:'madhapur',
    age:30
}]
const [data, usedata]=useState(person)
  return (
    <>
    <table border='5px' align='center'>
      <tr>
        <td>Name</td>
        <td>place</td>
        <td>age</td>
      </tr>
    {data.map((x)=><tr><td>{x.name}</td><td>{x.place}</td><td>{x.age}</td></tr>)}
    </table>
    </>
  )
}
