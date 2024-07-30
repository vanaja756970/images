import React,{useState} from 'react'
import Data from './info.json'
 export default function App() {

const [state, setState]=useState(Data)
  return (
    <>
    {state.map((x)=><li>{x.name}</li>)}
    </>
  )
}
