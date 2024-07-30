import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
 
import pic4 from './images/logo.jpg'
import pic1 from './images/banner2.jpg'
import pic2 from './images/banner2.jpg'
//import pic3 from './images/banner1.jpg'
 
export default function App() {
  return(
    <>
        <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg bg-body-success">
          <img src={pic4} className="d-block w-10"alt=''/>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">contacts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">check bmi</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        API
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">city whether API</a></li>
            <li><a className="dropdown-item" href="#">latest news</a></li>
            <li><a className="dropdown-item" href="#">food reciepe</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
 
 
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic2} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
 
<div className='container'>
   
   <div className='row'>
     <div className='col-md-8 p-4'>
          <h1 style={{fontFamily:'sans-serif', color:'black'}}>HI &#128075; ,</h1>
          <h1>I'm <span style={{color:'green'}}><b>VANAJA,</b> </span></h1>
          <h1 className="PT-3"> <b> FRONT-END DEVELOPER</b> </h1>
          <p className='pt-1' style={{fontFamily:'inherit'}}>The year 2015 has been <b>a milestone for global development as governments
             have adopted</b> the 2030 Agenda for Sustainable Development, along with the
             Sustainable Development Goals (SDGs). The bold agenda sets out a globalframework to end extreme poverty,
             fight inequality and injustice, and fix climate change until 2030.</p>
             <br/>
             <br/>
             <button style={{backgroundColor:'green',color:'white'}}>Start now</button><br/>
     </div>
     <div className='col-md-4'>
     <img src={pic4} alt=''/>
     </div>
   </div>
 
 </div>
</div>
</>
  )
}


