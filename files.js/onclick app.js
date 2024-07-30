import React from 'react'
  export default function App(){
 function demo(){
  alert("hello event")
 }
 return(
  <>
  <h3>click event</h3>
  <button onClick={demo}>clickme</button>
  </>
 )
}
