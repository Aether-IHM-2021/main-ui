import React, { createContext, useContext } from "react";
import axios from "axios";
import {Container, Stack, Button, Form, Col, Row} from "react-bootstrap"; 
import {RegisterContext} from "./App.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Text from "./components/atoms/Text/index.jsx";

const Register = () => {
    const {firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword} = useContext(RegisterContext);

    return (
        <Container>
            <Text variant="h2"> REGISTER </Text>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                <Container className="p-0 m-0">
                
                <Row>

                <Col>
                <Form.Control type="text" placeholder="First Name" onClick=
                {   (event) => { setFirstName(event.target.value); }   }/>
                
                </Col>

                <Col>
                <Form.Control type="text" placeholder="Last Name" onClick=
                {   (event) => { setLastName(event.target.value); }   }/>
                </Col>

                </Row>
                
                </Container>
                
                
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control type="email" placeholder="Email" onClick=
                {   (event) => { setEmail(event.target.value); }   }/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Control type="password" placeholder="Password" onClick=
                {   (event) => { setPassword(event.target.value); }   }/>

                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">

                <Form.Control type="password" placeholder="Confirm Password" onClick=
                {   (event) => { setPassword(event.target.value); }   }/>

                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Container className="p-0">
                    <Row>
                        <Col xs={{span: 4}}><Form.Check type="checkbox" label="Remember Me" /></Col>
                        <Col xs={{span: 2, offset: 6}} className="ml-auto"><a className="text-muted" href="" style={{textDecoration: 'none'}}>Forgot your password?</a></Col>
                    </Row>  
                </Container>
                
                </Form.Group>
                <Container>
                    <Row>
                        <Col as={Button} xs={{span: 8, offset: 2}} variant="primary" type="submit">
                            LOG IN     
                        </Col>
                    </Row>
                </Container>
                
            </Form>
        </Container>
    );
};

export default Register;