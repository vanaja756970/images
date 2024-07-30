import React,{useContext} from 'react'
import './style.css'
import { context } from './App'
export default function Comp3() {
  let x=useContext(context)
  return (
    <>
     <h3>Welcome to {x}</h3>
    </>
  )
}







