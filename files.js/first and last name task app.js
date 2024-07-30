import React,{useState} from 'react'
import './style.css'
const person={
  fname:'vicky'
}
export default function App(){
  const [state,setState]=useState(person)
  function demo(){
   if(state.fname=='vicky'){
    setState({fname:'vanaja'})}
    else{
      setState({fname:'vicky'})}
    }
  return (  
  <>
     <h3>first name is <span className='txt'>{state.fname}</span></h3>
    <button onClick={demo}>update</button>
  </>
  )
}







