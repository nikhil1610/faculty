import { Button, Col, Form, Row } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";

// import AuthContextProvider, { AuthContext } from '../context/AuthContext';
import AuthContextProvider, { AuthContext } from '../context/AuthContext';

const Login = () => {
    // console.log(useContext(AuthContext))
    const {state:{isAuthenticated}} = useContext(AuthContext);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err,setErr] = useState('');
    const [loading,setLoading] = useState(false);

    // const history= useHistory()

    if(isAuthenticated){
        navigate("/department");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!email || !password)
            return;

        console.log(email, password);

        // AuthContextProvider.login({email,password});

        try{
            setLoading(true);
            login({email, password});
            setLoading(false);
            // navigate('/department');
        }catch(err){
            console.log(err);
            setErr(err);
            setLoading(false);
        }
    }

    if(loading){
        return(
            <div>Loading...</div>
        )
    }


    return(
        <div>
            <div className='d-flex justify-content-center px-2' style={{marginTop:'10rem'}}>
                <div style={{width: '400px', maxWidth:'100%'}}>
                    <h2>Login</h2>
                    <Form onSubmit={handleSubmit} className='mt-3'>
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
                        <Row className='mt-5'>
                            <Col xs={12}>
                                <Button style={{width:"100%"}} type='submit'>LOGIN</Button>
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col>
                            <Link to='/register'>
                            Don't have an account? Sign Up
                            </Link>
                            </Col>
                        </Row>
                    </Form>
                    {err && (
                        <div>
                            Error Logging In.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Login;