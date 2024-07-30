import React from 'react'
import pic from './images/image (6).jpg'
export default function Comp2() {
    return (
        <>
           <div className='container'>
                <div className='row'>
                    <div className='col-md-7 p-4'>
                        <h1 className='pt-5'>WORKOUTS MADE <br /><span style={{color:'green'}}>EXCLUISE </span>FOR YOU!</h1>
                        <p className='pt-5'>We create <b>exclusive and unique workouts</b> for you.<br/> invest in your body and <b>get much more performance</b><br/> and quality of life.</p>
                    <button  style={{backgroundColor:'green', color:'white', borderRadius:'3px', margin:'30px', padding:'10px', width:'120px'}}>Start now</button>
                    </div>
             
                    <div className='col-md-5 p-4 ' style={{float:'right'}}>
 
                        <img src={pic} alt='' />
                    </div>
                    </div>
                    </div>
                    <div className='container text-center'>
                        <p >Send us a message<b>@treine.me</b></p>
                    </div>
               
           
        </>
    )
}
 