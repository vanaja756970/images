import React from 'react';
import { useState } from 'react';
import Data from './info.json'
export default function App() {
  const [state, setState]=useState(Data)
  return(
 <>
  <div className='container'>
<div className='row'>
 {state.map((x)=>
    <>
<div className='col-md-4'>
<div className="card">
  <img src={x.Pic} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{x.Place}</h5>
   </div>
</div>
</div> 
 </>
    ) }
     </div>
 </div>
</>)
}


