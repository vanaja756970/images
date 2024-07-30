import React from 'react'
export default function Users() {
const person=[
  {
    name:'vicky',
    place:'chennai'
  },
  {
    name:'vanaja',
    place:'hyderabad'
  },
  {
    name:'appu',
    place:'delhi'
  }]
  return (
    <>
    <h1>App</h1>
      {person.map((x)=><li>{x.name},{x.place}</li>)}
    </>
  )
}