import React from 'react'
import './style.css'
export default function Comp3({data}) {
  return (
    <div>
      {data.map((x)=><h1 className='a'>{x}</h1>)}
    </div>
  )
}







