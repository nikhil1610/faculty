import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axiosInstance from '../axiosConfig';
import qs from "qs";

import {Table} from 'react-bootstrap'
import { AuthContext } from '../context/AuthContext';
const FacultyDetails = () => {

    const {state} = useContext(AuthContext);
    const [faculties,setFaculties] = useState([]);

    const [fields, setFields] = useState([
        "Name",
        "department",
        "highest_degree",
        "institution",
        "designation",
        "specialization",
        "designation_date",
        "joining_date",
        "association_institution",
        "paper_publications",
        "phd_guidance",
        "phd_assess_yr",
        "currently_associated",
        "association_mode",
        "leaving_date",
        "completion_year"
    ]);


    // console.log(location.state.branchesList);

    useEffect(()=>{
      const query = qs.stringify({
        sort:['createdAt:desc'],
      })
        axiosInstance.get(`/faculties?${query}`,{
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
            <h3 style={{textAlign:"center"}}>Faculty Details</h3>
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

export default FacultyDetails;