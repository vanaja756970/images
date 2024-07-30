import React from 'react'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Other from './components/Other'
import './style.css'
import { BrowserRouter,Routes,Route ,Link} from 'react-router-dom'
export default function App(){
return(
  <>
  <h1> Main page</h1>
  <BrowserRouter>
      <Link to='/' className='a'>Home</Link>
      <Link to='/about' className='a'>About</Link>
      <Link to='/services' className='a'>Services</Link>
      <Link to='/contact' className='a'>Contact</Link>
      <Link to='/Other' className='a'>Other</Link>
  <Routes>     
  <Route path='/'      element={<h1>Home</h1>}></Route>  
  <Route path='/about'      element={<About/>}></Route>
  <Route path='/services' element={<Services/>}></Route>
  <Route path='/contact'   element={<Contact/>}></Route>
  <Route path='/other'      element={<Other/>}></Route>
  </Routes>
  </BrowserRouter>      
  </>
)
}
   
 