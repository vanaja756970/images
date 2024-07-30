import { createContext } from 'react'
import React from 'react'
import Comp1 from './Comp1'
export const context=createContext()
export default function App() {
 
  let uid="Mouritech"
  return (
    <> 
    <context.Provider value={uid}>
    <Comp1/>
    </context.Provider>
    </>
  )   
}           