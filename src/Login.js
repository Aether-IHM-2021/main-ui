import React, { useState } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import * as Yup from "yup";
import { Container, Button, Form, Col, Row, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Text from "./components/atoms/Text/index.jsx";

const Login = () => {
  const [success, setSuccess] = useState(false);
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please input a valid email")
        .required("Please enter your email"),
      password: Yup.string().required("Please Enter your password"),
    }),
    onSubmit: (values) => {
      setTimeout(() => {
        history.push("/dashboard");
      }, 3000);
    },
  });

  return (
    <Container>
      <Text variant="h2"> LOGIN </Text>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Container className="p-0">
            <Row>
              <Col xs={{ span: 4 }}>
                <Form.Check type="checkbox" label="Remember Me" />
              </Col>
              <Col xs={{ span: 5, offset: 3 }} className="ml-auto">
                <a
                  className="text-muted"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  Forgot your password?
                </a>
              </Col>
            </Row>
          </Container>
        </Form.Group>
        <Container>
          <Row>
            <Col
              as={Button}
              xs={{ span: 8, offset: 2 }}
              variant="primary"
              type="submit"
              onClick={() => setSuccess(true)}
            >
              LOG IN
            </Col>
          </Row>
        </Container>
      </Form>
      {success ? (
        <Alert className="my-4" variant="success">
          Successfully Login
        </Alert>
      ) : null}
      <Container className="mx-auto">
        <Row>
          <Col xs={{ span: 3 }}></Col>
          <Col xs={{ span: 7 }}>
            <a
              className="text-muted text-center"
              href=""
              style={{ textDecoration: "none" }}
            >
              Don't have an account?
            </a>
          </Col>
          <Col xs={{ span: 2 }}></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Login;
