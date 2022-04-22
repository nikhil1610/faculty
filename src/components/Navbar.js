import React, { useContext } from 'react'
import { Dropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
// import  from 'bootstrap-icons'
import '../css/Navbar.css';
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const {state:{isAuthenticated, userDetails}} =useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();
  // console.log(userDetails);
  // if(!isAuthenticated){
  //   return;
  // }


  if(!isAuthenticated)
  {
    navigate("/");
  }
  const handleLogout = ()=>{

    try{
      logout();
    }
    catch(err){
      console.log(err);
      navigate("/");
    }
    // console.log('logout user');
  }
  return (
    <div className='d-flex justify-content-between p-2' style={{backgroundColor:'#020248',color:"white"}}>
      <div className='department'>
        {userDetails? userDetails.department : "CSE"}
      </div>
      <div className='d-flex justify-content-around px-3'>
        <div className='px-2'>{userDetails? userDetails.username : "Sakshi Tomar"}</div>
        <Dropdown>
          <DropdownToggle>
          <i class="bi bi-person-circle"></i>  
          </DropdownToggle>    
          <DropdownMenu>
            <DropdownItem onClick={handleLogout}>Log Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  )
}
