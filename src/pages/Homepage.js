import React, { useContext } from 'react';

import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/Homepage.css';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';

export default function Homepage() {
  const Navigate = useNavigate();
  const {state} = useContext(AuthContext);
  return (
    <div>
      <Navbar/>
    <div className='px-2 mt-4 '>
      <Row className='d-flex mb-3 mx-0' style={{paddingLeft:"0.75rem",paddingRight:"0.75rem"}}>
        <Col>
        <Card>
        <Card.Body>
          <Card.Title>Criteria 1</Card.Title>
          <div className='alignment'>
          <Card.Text>
            Vision, Mission and Program Educational Objectives
          </Card.Text>
          <div className='d-flex justify-content-between'>
          <Card.Link >OPEN CRITERIAN PAGE</Card.Link>
          <Card.Link >VIEW CRITERIAN DETAILS</Card.Link>
          </div>
          </div>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Criteria 2</Card.Title>
          <div className='alignment'>
          <Card.Text>
            Program Curriculum and Teaching Learning Process
          </Card.Text>
          <div className='d-flex justify-content-between'>
          <Card.Link >OPEN CRITERIAN PAGE</Card.Link>
          <Card.Link >VIEW CRITERIAN DETAILS</Card.Link>
          </div>
          </div>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Criteria 3</Card.Title>
          <div className='alignment'>
          <Card.Text>
            Course Outcomes and Program Outcomes
          </Card.Text>
          <div className='d-flex justify-content-between'>
          <Card.Link >OPEN CRITERIAN PAGE</Card.Link>
          <Card.Link >VIEW CRITERIAN DETAILS</Card.Link>
          </div>
          </div>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card  style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Criteria 4</Card.Title>
          <div className='alignment'>
          <Card.Text>
            Student Performance
          </Card.Text>
          <div className='d-flex justify-content-between'>
          <Card.Link >OPEN CRITERIAN PAGE</Card.Link>
          <Card.Link >VIEW CRITERIAN DETAILS</Card.Link>
          </div>
          </div>
        </Card.Body>
        </Card>
        </Col>
      {/* </Row> */}
      {/* <Row className='mb-3'> */}
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Criteria 5</Card.Title>
          <div className='alignment'>
          <Card.Text>
            Faculty Information and Contribution
          </Card.Text>
          <div className='d-flex justify-content-between'>
          <Card.Link onClick={()=>Navigate('/faculty')}>OPEN CRITERIAN PAGE</Card.Link>
          {state.isAuthenticated && state.userDetails.isCoordinator === "Yes" && (
                      <Card.Link onClick={()=>Navigate('/report')}>Generate Report</Card.Link>
          )}
          <Card.Link onClick={()=>Navigate('/faculty-details')}>VIEW CRITERIAN DETAILS</Card.Link>
          </div>
          </div>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Criteria 6</Card.Title>
          <div className='alignment'>
          <Card.Text>
            Facilities and Technical Support
          </Card.Text>
          <div className='d-flex justify-content-between'>
          <Card.Link >OPEN CRITERIAN PAGE</Card.Link>
          <Card.Link >VIEW CRITERIAN DETAILS</Card.Link>
          </div>
          </div>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card  style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Criteria 7</Card.Title>
          <div className='alignment'>
          <Card.Text>
            Continuous Improvement
          </Card.Text>
          <div className='d-flex justify-content-between'>
          <Card.Link >OPEN CRITERIAN PAGE</Card.Link>
          <Card.Link >VIEW CRITERIAN DETAILS</Card.Link>
          </div>
          </div>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Criteria 8</Card.Title>
          <div className='alignment'>
          <Card.Text>
            First Year Academics
          </Card.Text>
          <div className='d-flex justify-content-between'>
          <Card.Link >OPEN CRITERIAN PAGE</Card.Link>
          <Card.Link >VIEW CRITERIAN DETAILS</Card.Link>
          </div>
          </div>
        </Card.Body>
        </Card>
        </Col>
      {/* </Row> */}
      {/* <Row> */}
        <Col style={{maxWidth:'327.25px'}}>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Criteria 9</Card.Title>
          <div className='alignment'>
          <Card.Text>
            Student Support Systems
          </Card.Text>
          <div className='d-flex justify-content-between'>
          <Card.Link >OPEN CRITERIAN PAGE</Card.Link>
          <Card.Link >VIEW CRITERIAN DETAILS</Card.Link>
          </div>
          </div>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Criteria 10</Card.Title>
          <div className='alignment'>
          <Card.Text>
            Governance, Institutional Support and Financial Resources
          </Card.Text>
          <div className='d-flex justify-content-between'>
          <Card.Link >OPEN CRITERIAN PAGE</Card.Link>
          <Card.Link >VIEW CRITERIAN DETAILS</Card.Link>
          </div>
          </div>
        </Card.Body>
        </Card>
        </Col>
      </Row>
  </div>
    </div>
  )
}
