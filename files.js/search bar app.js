import React, { useState } from 'react'
import Data from'./data.json'
export default function App() {
  const [state, setState] = useState(Data)
  const [search,setSearch]= useState()
  const handler=(e)=>{
    setSearch(e.target.value)
  }
  return (
    <>
    <input type="text" placeholder='search' value={search} onChange={handler}/>
    <br/>
    {state.filter((x)=>x.place.includes(search)).map((item)=><li>{item.place}</li>)}
    </>
  )
}