import React, { useState, } from 'react'
import axios   from 'axios'
export default function App(){
  const [state,setState]=useState([])
    function handler (){
    axios.get('https://randomuser.me/api/?results=50')
      .then((res)=> {  
      //.then(json =>setState(json.results))
      //.then(json =>console.log(json))
      setState(res.data.results)
      })
    }
  return (   
    <>       
      {state.map((list)=><li>{list.name.first}</li>)}
      <button onClick={handler}>get data</button>
    </>
  )
} 

      


