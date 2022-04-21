import { Button, Col, Form, Row } from 'react-bootstrap';
import React, { useContext, useState, useEffect } from 'react';
import {Link, useNavigate} from "react-router-dom";

// import AuthContextProvider, { AuthContext } from '../context/AuthContext';
import AuthContextProvider, { AuthContext } from '../context/AuthContext';
import { DropdownTagsInput } from '../components/TagsInput';
import axiosInstance from '../axiosConfig';
import Navbar from '../components/Navbar';

const Report = () => {
    // console.log(useContext(AuthContext))
    const {state} = useContext(AuthContext);

    const [branchesList, setBranchesList] = useState([
    ]);

    const [allowedFields, setAllowedFields] = useState([
        "Name",
        "department",
        "highest_degree",
        "institution",
        "designation",
        "specializaton",
        "designation_date",
        "association_date",
        "joining_date",
        "association_institution",
        "paper_publications",
        "phd_guidance",
        "phd_under_whom",
        "currently_associated",
        "association_mode",
        "leaving_mode",
        "completion_year"
    ]);
    const [fieldSelected, setFieldSelected] = useState("");
    const [suggestFields, setSuggestFields] = useState([]);
    const [branchDeleted, toggleBranchDeleted] = useState(false);

    const deleteBranch = (index) => {
        toggleBranchDeleted(!branchDeleted);
        const newBranchesList = [...branchesList];
        newBranchesList.splice(index, 1);
        setBranchesList(newBranchesList);
    };

    useEffect(() => {
        // axiosInstance
        //     .get("/branches")
        //     .then(({ data }) => {
        //         setAllowedBranches(data.branches.branches);
        //         setSuggestBranches(data.branches.branches);
        //     })
        //     .catch((err) => {
        //         console.log(err, err.response);
        //     });
    }, []);

    useEffect(() => {
        // console.log('function invoked');
        let branchesPushed = [];
        branchesList.map((option, key) => branchesPushed.push(option.branch));

        let newBranches = [];
        newBranches = allowedFields.filter(
            (branch, i) => !branchesPushed.includes(branch)
        );
        setSuggestFields(newBranches);
        newBranches = [];
    }, [branchDeleted]);

    // const history= useHistory()


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(branchesList);
        // AuthContextProvider.login({email,password});

        // try{
        //     setLoading(true);
        //     login({email, password});
        //     navigate('/department');
        // }catch(err){
        //     console.log(err);
        //     setErr(err);
        //     setLoading(false);
        // }
    }



    return(
        <div>
            <Navbar/>
            <div className='d-flex justify-content-center px-2' style={{marginTop:'10rem'}}>
                <div style={{width: '400px', maxWidth:'100%'}}>
                    <h2>Generate Report</h2>
                    <Form onSubmit={handleSubmit} className='mt-3'>

                    <Row className="mt-3">
                <Col md={12}>
                    <Form.Group>
                        <Form.Label>Select fields to generate the report</Form.Label>
                        {/* <p style={{ fontSize: "0.875rem" }}>
                            ({allowedFields.join(",")})
                        </p> */}
                        <DropdownTagsInput
                            inputProps={{
                                placeholder:
                                    "Type a field name and select from dropdown",
                            }}
                            currentValue={fieldSelected}
                            renderValue={(value) => value}
                            suggestionList={suggestFields}
                            renderOptions={(option) => option}
                            onSelect={(newValue) => {
                                setBranchesList((current) => [
                                    ...current,
                                    { branch: newValue },
                                ]);
                                setSuggestFields(
                                    suggestFields.filter(
                                        (branch, key) => branch !== newValue
                                    )
                                );
                            }}
                        />
                    </Form.Group>

                    </Col>
                    </Row>

                    <div className="mt-1">
                        {branchesList.map((branch, key) => (
                            <li key={key}>
                                {branch.branch}
                                <span
                                    className="ms-3"
                                    onClick={() => deleteBranch(key)}
                                >
                                    {/* <FontAwesomeIcon icon={faTimes} /> */}
                                </span>
                            </li>
                        ))}
                    </div>

                        {/* <Row>
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
                        </Row> */}
                        <Row className='mt-5'>
                            <Col xs={12}>
                                <Link to={'/report-generate'} state={{branchesList}}>
                                <Button style={{width:"100%"}} type='submit'>Generate Report</Button>
                                </Link>
                            </Col>
                        </Row>
                        {/* <Row className='mt-3'>
                            <Col>
                            <Link to='/register'>
                            Don't have an account? Sign Up
                            </Link>
                            </Col>
                        </Row> */}
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default Report;