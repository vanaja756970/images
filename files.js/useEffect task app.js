import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
export default function Card_API() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setState(json));
  }, []);
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          {state.map((item) => (
            <div  className="card" style={{ width: '27rem' }}>
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h3 className='card-title'>{item.price}</h3>
                <p className="card-text">{item.description}</p>
                { <a href="#" className="btn btn-primary">Go somewhere</a> }
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
 