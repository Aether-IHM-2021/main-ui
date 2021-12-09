import React, { useContext } from "react";
import axios from "axios";
import {Container, Button, Form} from "react-bootstrap"; 
import {AppContext} from "./App.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [setEmail, setPassword, email, password] = useContext(AppContext);

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
            
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onclick=
                {   (event) => { setEmail(event.target.value); }   }/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onclick=
                {   (event) => { setPassword(event.target.value); }   }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onclick={logUser}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Login;