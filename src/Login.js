import React, { createContext, useContext } from "react";
import axios from "axios";
import {Container, Button, Form, Col, Row} from "react-bootstrap"; 
import {AppContext} from "./App.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const {setEmail, setPassword, email, password} = useContext(AppContext);

    // check authentication from website
    function logUser(){
        console.log(email);
        console.log(password);
        const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64');

        // debug function: remove when auth url is provided
        console.log(token);

        const url = "https://...";
        
        /*
        axios.post(url, {
            headers: {
              'Authorization': `Basic ${token}`
            }
          });
          */
    }

    return (
        <Container>
            <h1> LOG IN </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" onClick=
                {   (event) => { setEmail(event.target.value); }   }/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onClick=
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
                        <Col as={Button} xs={{span: 8, offset: 2}} variant="primary" type="submit" onclick={logUser}>
                            LOG IN     
                        </Col>
                    </Row>
                </Container>
                
            </Form>
            <Container className="mx-auto">
                    <Row>
                        <Col xs={{span: 5}}></Col>
                        <Col xs={{span: 2}}>
                        <a className="text-muted text-center" href="" style={{textDecoration: 'none'}}>Don't have an account?</a>
                        </Col>
                        <Col xs={{span: 5}}></Col>
                    </Row>
            </Container>
        </Container>
    );
};

export default Login;