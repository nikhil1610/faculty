import { Button, Col, Form, Row } from 'react-bootstrap';
import React, { useContext, useEffect, useState,useRef } from 'react';

import { AuthContext } from '../context/AuthContext';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { register,login } = useContext(AuthContext);
    const {state:{isAuthenticated}} = useContext(AuthContext);
    const navigate = useNavigate();

    // const formRef = useRef();

    const[name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [department, setDepartment] = useState('Information Technology');
    const [isCoordinator, setCoordinator] = useState('');
    const [error,setError] = useState('');
    // const history= useHistory()

    const [loading,setLoading]= useState(false);
    const[regError, setRegError] = useState('');

    useEffect(()=>{

      if(password!== confirmPass)
      {
        setError("Passwords doesn't match"); 
      }
      else{
        setError('');
      }
    },[confirmPass])
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const formPointer = formRef.current;
        if(password !== confirmPass)
            return;
        if(!name || !email || !password)
            return;

        // console.log(name,email,password,department,isCoordinator)
        // console.log(email, password);

        try{
            setLoading(true);
            register({name,email, password,department,isCoordinator})
            .then((response)=>{
                // console.log(response);
                // console.log(response.data);
            })
            .catch((err)=>{
                console.log(err);
                setRegError(err);
            });
            // login({email,password});
            // if(regError){
            //     return;
            // }
            // navigate("/department");
            setLoading(false);
        }
        catch(err){
            console.log(err);
            setRegError(err);
            setLoading(false);
        }
    }

    if(isAuthenticated)
    {
        navigate("/department");
    }

    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    return(
        <div>
            <div className='d-flex justify-content-center px-2' style={{marginTop:'5rem', marginBottom:'10rem'}}>
                <div style={{width: '400px', maxWidth:'100%'}}>
                    <h2>Register</h2>
                    <Form onSubmit={handleSubmit} className='mt-3'>
                        <Row>
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        required
                                        value={confirmPass}
                                        onChange={(e) => setConfirmPass(e.target.value)}
                                    />
                                    <Form.Text>{error}</Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label>Department</Form.Label>
                                    <Form.Select value={department} onChange={(option)=>setDepartment(option.target.value)}>
                                      <option>Information Technology</option>
                                      <option>Computer Science and Engineering</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                          <Col xs={12}>
                            <Form.Label>Department Co-ordinator?</Form.Label>
                            <Form.Check label="Yes" type="radio" name='coordinator' onClick={()=>setCoordinator("Yes")} ></Form.Check>
                            <Form.Check label="No" type="radio" name='coordinator' onClick={()=>setCoordinator("No")}></Form.Check>
                          </Col>

                        </Row>
                        <Row className='mt-5'>
                            <Col xs={12}>
                                <Button style={{width:"100%"}} type='submit'>REGISTER</Button>
                            </Col>
                        </Row>
                    </Form>

                    {regError && (
                        <div>
                            Error in Registering the User. Please try later.
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
export default Login;