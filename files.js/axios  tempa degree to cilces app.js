import { useState } from 'react'
import axios from 'axios'
export default function App() {
  const [state, setState]=useState([])
  function handler(){
  axios.get('https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=e2d06cd0cbbae6b2a7ca57f943d580d9')
.then((res)=>{
 //console.log(res)
  //console.log(res.data.stations.main)
 setState(res.data.main.temp)
   })
  }  
  return (
    <>
    <h1>Hyderabad Temperature</h1>
{state.temp}
<button onClick={handler}>get value</button>
    </>
  )
}
