import React from 'react'
import Comp2 from './Comp2'
export default function Comp1({data,pic}){
  return (
    <div>
      <Comp2 data={data} src={pic}/>
    </div>
  )
}







