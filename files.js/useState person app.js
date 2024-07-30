import React from 'react'
import { useState} from 'react'
 function App() {
   //let uid="mouritech"
   const person={
    name:'vanaja',
    place:'uk',
    age:22
   }
   const students=['vicky','vanaja','appu','somu']
   const[state,setState]=useState(students)
  //const [state,setState]=useState(uid)
  return ( 
     <>
     <h3>ReactHooks</h3>
     <h4>useState</h4>
     {/*<h1>{state}</h1>*/}
     <h1>{person.name}</h1>
     <h1>{state[0]}</h1>
    </>
  )
}
     export default App