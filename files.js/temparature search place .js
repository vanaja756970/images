import axios from 'axios'
import React, { useState} from 'react'
export default function App() {
  const [state, setState] = useState([])
  const [state1, setState1] = useState("")
   var Loc="https://api.openweathermap.org/data/2.5/weather?q="+state1+"&appid=e2d06cd0cbbae6b2a7ca57f943d580d9"
    function abc() {
  //   fetch('https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=143a78182370ac2f47368b4f0e83dddc')
  //     .then(res => res.json())
  //     //.then(json=>console.log(json))
  //     .then(json => console.log(json))
      axios.get(Loc)
      .then(res => setState(res.data.main))
  }
  function a(e){
    setState1(e.target.value)
  }
  return (
    <>
    <li> {state.temp}</li>
   <h5>celcius:{(state.temp-273.15)}</h5>
   <h5>place:{state1}</h5>
  <input type='text' onChange={a}/>
  <button onClick={abc}>submit</button>
    </>
  )
}
 
 
