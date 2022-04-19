import React, { useContext } from 'react'
// import  from 'bootstrap-icons'
import { AuthContext } from '../context/AuthContext'
export default function Navbar() {
  const {state:{isAuthenticated}} =useContext(AuthContext);

  if(!isAuthenticated){
    return;
  }
  return (
    <div className='d-flex justify-content-between p-2' style={{backgroundColor:'#020248',color:"white"}}>
      <div className='department'>
        Information Technology
      </div>
      <div className='d-flex justify-content-around px-3'>
        <div className='px-2'>Sakshi Tomar</div>
        <i class="bi bi-person-circle"></i>      
      </div>
    </div>
  )
}
