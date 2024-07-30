import React from 'react'
export default function App(props) {
  return ( 
        <>
       <div className="card bg-primary " >
                <img src={props.pic} alt="" className=" img-fluid max-auto d-block card-img-top p-3"/>
                  <div className="card-body bg-success">
                    <h3 className="card-title text-light text-center"></h3>
                     <p className="card-text text-black  text-center" >RS.{props.price}</p>
                  </div>
                </div>
       </>
  )
}