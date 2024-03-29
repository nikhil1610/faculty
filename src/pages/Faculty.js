import React, {useState, useEffect, useContext} from 'react'
import {
    Col,
    Row,
    Card,
    Form,
    Button,
    InputGroup,
  } from "react-bootstrap";
  import axiosInstance from '../axiosConfig';
import '../css/Faculty.css';
import Navbar from '../components/Navbar';
import { fileUpload, fileUploadAndLink } from '../services/fileUpload';
import { AuthContext } from '../context/AuthContext';

const Faculty = ()=>{
  const {state} = useContext(AuthContext);
  const [inputState, setInputState] = useState({
    Name: "",
    highest_degree: "",
    institution: "",
    completion_year: "",
    association_institution: "",
    designation: "",
    designation_date: "",
    joining_date: "",
    department: "",
    specialization: "",
    paper_publications: "",
    phd_guidance: "",
    phd_assess_yr: "",
    // currently_associated: "",
    leaving_date: "",
    // association_mode: "",
    resume: "",
    
  });
  const [msg, setMessage] = useState('');
  const [resume, setResume] = useState({
    file:null,
    value:""
});
  const [curAssociated, setCurAssociated] = useState('');
  const [associationMode, setAssociationMode] = useState('');

      // const [student, setStudent] = useState([]);
    
      const handleChange = (e) => {
        e.preventDefault();
        setInputState({
          ...inputState,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(inputState);

        if(resume.file){
          try{
            const fileUploadRes = await fileUpload(resume.file);
            inputState.resume = fileUploadRes.data[0];
          }catch(err)
          {
             console.log(err,err.response);
          }
        }

        // console.log({
        //   Name: inputState.Name,
        //   highest_degree: inputState.highest_degree,
        //   institution: inputState.institution,
        //   completion_year: inputState.completion_year,
        //   association_institution: inputState.association_institution,
        //   designation: inputState.designation,
        //   designation_date: inputState.designation_date,
        //   joining_date: inputState.joining_date,
        //   department: inputState.department,
        //   specialization: inputState.specialization,
        //   paper_publications: inputState.paper_publications,
        //   phd_guidance: inputState.phd_guidance,
        //   phd_assess_yr: inputState.phd_assess_yr,
        //   currently_associated: curAssociated,
        //   leaving_date: inputState.leaving_date? inputState.leaving_date : undefined,
        //   association_mode: associationMode,
        //   association_instituition:inputState.association_institution,
        //   resume:inputState.resume

        // });

      try{
        const response = await axiosInstance.post('/faculties', {
          data:{
            Name: inputState.Name,
            highest_degree: inputState.highest_degree,
            institution: inputState.institution,
            completion_year: inputState.completion_year,
            association_institution: inputState.association_institution,
            designation: inputState.designation,
            designation_date: inputState.designation_date,
            joining_date: inputState.joining_date,
            department: inputState.department,
            specialization: inputState.specialization,
            paper_publications: inputState.paper_publications,
            phd_guidance: inputState.phd_guidance,
            phd_assess_yr: inputState.phd_assess_yr,
            currently_associated: curAssociated,
            leaving_date: inputState.leaving_date? inputState.leaving_date : undefined,
            association_mode: associationMode,
            association_instituition:inputState.association_institution,
            resume:inputState.resume

          }
        },{
          headers:{
              // 'Content-Type':'application/json',
              Authorization:
              `Bearer ${state.jwt}`,  
          }
      });

      // console.log(response.data);
      setMessage('Faculty information added.');
     }catch(err){
       console.log(err);
       setMessage('Error in Adding Faculty details.');
     }

      };

      const fileHandler = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setResume({ file, value: e.target.value });
    };

    return (
      <div>
        <Navbar/>
        <div className='d-flex justify-content-center align-items-center my-3'>
          <div className='w-75'>
          <div>
                <h2>Faculty List</h2>
            </div>
              
                              
                <Form onSubmit={handleSubmit}>
                <div className='p-4 border-light bg-white shadow-sm' style={{width:"100%!important"}}>
                <Row>
                    
                    <Col md={12} className="mb-3">
                      <Form.Group id="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                        style={{width:"75%",float: "right",marginRight:"7rem"}}
                          required
                          type="text"
                          name="Name"
                          value={inputState.Name}
                          onChange={handleChange}
                          placeholder={inputState.Name}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row> 
                    {/* <Col md={12} className="mb-3">Qualification</Col> */}
                    <h5>Qualification</h5>
                    <Col md={12} className="mb-3">
                      <Form.Group id="highest_degree">
                        <Form.Label>Highest Degree</Form.Label>
                        <Form.Control
                        style={{width:"75%",float: "right",marginRight:"7rem"}}
                          required
                          type="text"
                          name="highest_degree"
                          value={inputState.highest_degree}
                          onChange={handleChange}
                          placeholder={inputState.highest_degree}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Group id="institution">
                        <Form.Label>Institution</Form.Label>
                        <Form.Control
                        style={{width:"75%",float: "right",marginRight:"7rem"}}
                          required
                          type="text"
                          name="institution"
                          value={inputState.institution}
                          onChange={handleChange}
                          placeholder={inputState.institution}
                        />
                      </Form.Group>
                    </Col>                   
                    <Col md={12} className="mb-3">
                      <Form.Group id="completion_year">
                        <Form.Label>Year of Completion</Form.Label>
                        <Form.Control
                        style={{width:"75%",float: "right",marginRight:"7rem"}}
                          required
                          type="date"
                          name="completion_year"
                          value={inputState.completion_year}
                          onChange={handleChange}
                          placeholder={inputState.completion_year}
                        />
                      </Form.Group>
                    </Col>                   

                    {/* <Col md={12} className="mb-3"> */}
                      {/* <Form.Group >
                        <Form.Label className='mt-2'>Date of Birth  : </Form.Label>
                        <div style={{width:"75%",float: "right",marginRight:"7rem"}}>
                          <Datetime
                            timeFormat={false}
                            closeOnSelect={false}
                            onChange={handleDob}
                            renderInput={(props, openCalendar) => (
                              <InputGroup>
                                <InputGroup.Text>
                                  <FontAwesomeIcon icon={faCalendarAlt} />
                                </InputGroup.Text>
                                <Form.Control
                                  required
                                  type="text"
                                  value={
                                    inputState.dob
                                      ? moment(inputState.dob).format("MM/DD/YYYY")
                                      : ""
                                  }
                                  placeholder={
                                    inputState.dob
                                      ? moment(inputState.dob).format("MM/DD/YYYY")
                                      : ""
                                  }
                                  onFocus={openCalendar}
                                  onChange={() => {}}
                                />
                              </InputGroup>
                            )}
                          />
                        </div>
                        
                      </Form.Group>
                    </Col> */}
              </Row>
              <Row>
                    <Col md={12} className="mb-3">
                      <Form.Group id="association_institution">
                        <Form.Label>Association with Institution</Form.Label>
                        <Form.Control
                        style={{width:"75%",float: "right",marginRight:"7rem"}}
                          required
                          type="text"
                          name="association_institution"
                          value={inputState.association_institution}
                          onChange={handleChange}
                          placeholder={inputState.association_institution}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Group id="designation">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control
                        style={{width:"75%",float: "right",marginRight:"7rem"}}
                          // required
                          name="designation"
                          onChange={handleChange}
                          value={inputState.designation}
                          type="text"
                          placeholder={inputState.designation}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Group id="designation_date">
                        <Form.Label>Date on which designated as Professor/Associate Professor</Form.Label>
                        <Form.Control
                        style={{width:"75%",float: "right",marginRight:"7rem"}}
                          // required
                          name="designation_date"
                          onChange={handleChange}
                          value={inputState.designation_date}
                          type="date"
                          placeholder={inputState.designation_date}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Group id="joining_date">
                        <Form.Label>Date of joining Institution</Form.Label>
                        <Form.Control
                        style={{width:"75%",float: "right",marginRight:"7rem"}}
                          // required
                          name="joining_date"
                          onChange={handleChange}
                          value={inputState.joining_date}
                          type="date"
                          placeholder={inputState.joining_date}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Group id="department">
                        <Form.Label>Department</Form.Label>
                        <Form.Control
                          required
                          style={{width:"75%",float: "right",marginRight:"7rem"}}
                          type="text"
                          name="department"
                          value={inputState.department}
                          onChange={handleChange}
                          placeholder={inputState.department}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Group id="specialization">
                        <Form.Label>Specialization</Form.Label>
                        <Form.Control
                          required
                          style={{width:"75%",float: "right",marginRight:"7rem"}}
                          type="text"
                          name="specialization"
                          value={inputState.specialization}
                          onChange={handleChange}
                          placeholder={inputState.specialization}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <h5>Academic Research</h5>
                    <Col md={12} className="mb-3">
                      <Form.Group id="paper_publications">
                        <Form.Label>Research paper publications</Form.Label>
                        <Form.Control
                          required
                          style={{width:"75%",float: "right",marginRight:"7rem"}}
                          type="text"
                          name="paper_publications"
                          value={inputState.paper_publications}
                          onChange={handleChange}
                          placeholder={inputState.paper_publications}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Group id="phd_guidance">
                        <Form.Label>Ph.D guidance</Form.Label>
                        <Form.Control
                          required
                          style={{width:"75%",float: "right",marginRight:"7rem"}}
                          type="number"
                          name="phd_guidance"
                          value={inputState.phd_guidance}
                          onChange={handleChange}
                          placeholder={inputState.phd_guidance}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Group id="phd_assess_yr">
                        <Form.Label>Fully receiving PhD during Assesment years</Form.Label>
                        <Form.Control
                          required
                          style={{width:"75%",float: "right",marginRight:"7rem"}}
                          type="text"
                          name="phd_assess_yr"
                          value={inputState.phd_assess_yr}
                          onChange={handleChange}
                          placeholder={inputState.phd_assess_yr}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="mb-3">
                    <Col xs={12}>
                            <Form.Label style={{marginRight:"1.6rem"}}>Currently Associated</Form.Label>
                            <Form.Check  inline label="Yes" type="radio" name='currently_associated' onClick={()=>setCurAssociated('Yes')}  ></Form.Check>
                            <Form.Check inline label="No" type="radio" name='currently_associated' onClick={()=>setCurAssociated('No')} ></Form.Check>
                    </Col>
                    {curAssociated === "No" && (
                      <Form.Group id="leaving_date">
                        <Form.Label>Date of leaving</Form.Label>
                        <Form.Control
                        style={{width:"75%",float: "right",marginRight:"7rem"}}
                          // required
                          name="leaving_date"
                          onChange={handleChange}
                          value={inputState.leaving_date}
                          type="date"
                          placeholder={inputState.leaving_date}
                        />
                      </Form.Group>
                      )
                      }
                    </Col>
                    <Col xs={12}>
                            <Form.Label style={{marginRight:"1.6rem"}}>Nature of Association</Form.Label>
                            <Form.Check  inline label="Contract" type="radio" name='association_nature' onClick={()=>setAssociationMode('Contract')} ></Form.Check>
                            <Form.Check label="Regular" inline type="radio" name='association_nature' onClick={()=>setAssociationMode('Regular')}></Form.Check>
                    </Col>
                    <Col sm={12} className="mb-3">
                    <Form.Group>
                                <Form.Label>Resume</Form.Label>
                                <Form.Control
                                    type="file"
                                    accept=".pdf"
                                    value={resume.value}
                                    onChange={fileHandler}
                                />
                                {resume.file && (
                                    <Button
                                        className="mt-2"
                                        size="sm"
                                        variant="outline-danger"
                                        onClick={() =>
                                            setResume({
                                                file: null,
                                                value: "",
                                            })
                                        }
                                    >
                                        Clear
                                    </Button>
                                )}
                            </Form.Group>
                        </Col>

                  </Row>
            </div>
                  <Row>
                    <Col>
                      <Button variant='primary' className='w-100' style={{marginTop:"2rem"}} type='submit'>Submit</Button>
                    </Col>
                  </Row>
          </Form>

          {msg && (
            <div className='mt-2 mb-3' > <h6>{msg}</h6></div>
          )}

            
          </div>
            
        </div>
        </div>
    )
}

export default Faculty;