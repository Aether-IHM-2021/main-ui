import React, { createContext, useContext } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Container, Button, Form, Col, Row} from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Text from "./components/atoms/Text/index.jsx";
import { AppContext } from "./App";

const Register = () => {
    // use this to switch between components
    //const {changePage} = useContext(AppContext);
    
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            firstName : Yup.string()
            .max(256, "First name is too long!")
            .required("Please enter your first name"),
            lastName : Yup.string()
            .max(256, "First name is too long!")
            .required("Please enter your last name"),
            email : Yup.string()
            .email("Invalid email address")
            .required("Please enter your email"),
            password: Yup.string()
            .required('Please enter your password')
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: (values) => {
            // do what is needed to the data :>
        }
    });

    return (
        <Container>
            <Text variant="h2"> REGISTER </Text>
            <h1 variant="h1"> REGISTER </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                <Container className="p-0 m-0">
                
                <Row>

                <Col>
                <Form.Control id="firstName" name="firstName" type="text" placeholder="First Name" 

                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                />
                {formik.errors.firstName && formik.touched.firstName ? <p>{formik.errors.firstName}</p> : null}
                </Col>

                <Col>
                <Form.Control id="lastName" name="lastName" type="text" placeholder="Last Name" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                />
                {formik.errors.lastName && formik.touched.lastName ? <p>{formik.errors.lastName}</p> : null}
                </Col>

                </Row>
                
                </Container>
                
                
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control id="email" name="email" type="email" placeholder="Email" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Control id="password" name="password" type="text" placeholder="Password"  
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password ? <p>{formik.errors.password}</p> : null}

                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">

                <Form.Control id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password"   
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                />
                {formik.errors.confirmPassword && formik.touched.confirmPassword ? <p>{formik.errors.confirmPassword}</p> : null}

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
                            REGISTER
                        </Col>
                    </Row>
                </Container>
                
            </Form>
        </Container>
    );
};

export default Register;