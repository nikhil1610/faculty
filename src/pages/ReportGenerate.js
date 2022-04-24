import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axiosInstance from '../axiosConfig';

import {Table} from 'react-bootstrap'
import { AuthContext } from '../context/AuthContext';
const ReportGenerate = () => {

    const location = useLocation();
    const {state} = useContext(AuthContext);
    const [faculties,setFaculties] = useState([]);

    // console.log(location.state.branchesList);
    const fields = location.state.branchesList;

    useEffect(()=>{
        axiosInstance.get(`/faculties/`,{
            headers: {
              Authorization:
                `Bearer ${state.jwt}`,
            },
          }
          )
            .then((response)=>{
                // console.log(response.data);
                setFaculties(response.data.data);
            }
            )
            .catch((err)=>{
                console.log(err);
            })
    },[state]);

return(
    <div>
        <Navbar/>
        <div className='px-3'>
            <h3 style={{textAlign:"center"}}>Generated Report</h3>
<div style={{overflowX:"scroll"}}>
 <Table striped bordered hover>
  <thead>
    <tr>
        <th>S.No</th>
        {fields.map((value,index)=>(
            // {console.log(value.branch+index)}
           <th>{value}</th>
        ))}
      {/* <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th> */}
    </tr>
  </thead>
  <tbody>
      {/* {console.log(faculties)} */}
      {faculties && faculties.map((faculty,index)=>(
    <tr>
        <td>{index+1}</td>
        {fields.map((field,index)=>(
            <>
            {/* {console.log('logging')}
            {console.log(faculty.attributes[field])} */}
            <td>{faculty.attributes[field]}</td>
            </>
        ))}
        {/* <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td> */}
    </tr> 

      ))}
   </tbody>
  </Table>
  </div>

    </div>
    
    </div>
)
}

export default ReportGenerate;