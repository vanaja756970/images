import ReactDOM from 'react-dom/client'
import App from './App.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import pic from './images/flower1.jpg'
import pic1 from './images/course.jpg'
import pic2 from './images/flower.jpg'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
<div className='container'>
    <div className='row'>
        <div className='col-md-4'>
  <App pic={pic} price='10000'/></div>
  <div className='col-md-4'>
  <App pic={pic1} price='15000'/></div>
  <div className='col-md-4'>
  <App pic={pic2} price='18000'/></div>
  </div>
  </div>
 
</>
)


