import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Container, Button, Form, Col, Row} from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Text from "./components/atoms/Text/index.jsx";

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email : Yup.string()
            .email("Please input a valid email").required("Please enter your email"),
            password: Yup.string()
            .required('Please Enter your password')
        }),
        onSubmit: (values) => {
            // do what is needed to the data :>
        }
    });

    return (
        <Container>
            <Text variant="h2"> LOGIN </Text>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control id="email" name="email" type="email" placeholder="Email" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Control id="password" name="password" type="password" placeholder="Password" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
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