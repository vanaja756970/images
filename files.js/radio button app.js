import React, { useState } from 'react'
export default function App() {
  const [state, setState] = useState('Regular')
  const handler= (e) => {
    setState(e.target.value)
  };
  return (
    <>
    <div className='App'>
      <h1>Select Pizza Size</h1>
 
     <input
      type='Radio'
      name='state'
      value='Regular'
      id='regular'
      checked={state==='Regular'}
      onChange={handler}/>
 
     <label htmlFor='regular'>Regular</label>
 
     <input
      type='Radio'
      name='state'
      value='Medium'
      id='medium'
      checked={state==='Medium'}
      onChange={handler}/>
 
     <label htmlFor='medium'>Medium</label>
     
     <input
      type='Radio'    
      name='state'
      value='Large'
      id='large'
      checked={state==='Large'}
      onChange={handler}/>
 
     <label htmlFor='large'>Large</label>
     <h2>Select Topping <span style={{ color: "orange" }}>{state}</span></h2>
      </div>
    </>
  );
}