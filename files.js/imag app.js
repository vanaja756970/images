import React from 'react'
import Comp1 from './Comp1'
import pic from './images/nature 1.jpg'
export default function App() {
let pic1={
  img:pic,
  uid:"Vicky"
}
  return (
    <>
   <Comp1 data={pic1.uid}  pic={pic1.img}/>
    </>
  )
}