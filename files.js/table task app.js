import React from 'react'
import { useState } from 'react'
function Onclick() {
    const [person, setPerson] =useState({
        name: "vanaja",
        place: 'pulivendula',
        age: 22
    })
 
    const handler = () => {
        setPerson({
           
            name: "vamsi",
            place: "Hyderbad",
            age: 21
        })
    }
 
    return (
        <>
            <h3>click event</h3>
            <table border="2px">
          
                  <tr>
                    <td>name</td>
                    <td>place</td>
                    <td>age</td>
                </tr>
               <tr>
          
                <td>{person.name}</td>
                <td>{person.place}</td>
                <td>{person.age}</td>
               </tr>
            </table>
            <button onClick={handler}>Click me</button>
        </>
    )
}
 
export default Onclick;