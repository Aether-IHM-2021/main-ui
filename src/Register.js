import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Text from "./components/atoms/Text/index.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";

const Register = () => {
  let history = useHistory();
  const { userType } = useParams();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(256, "First name is too long!")
        .required("Please enter your first name"),
      lastName: Yup.string()
        .max(256, "First name is too long!")
        .required("Please enter your last name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email"),
      password: Yup.string()
        .required("Please enter your password")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
      userType: Yup.string(),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      localStorage.setItem("firstName",values.firstName);
      localStorage.setItem("lastName",values.lastName);
      setTimeout(() => {
        history.push("/login");
      }, 3000);
    },
  });

  return (
    <Container>
      <Text variant="h2"> REGISTER </Text>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Container className="p-0 m-0">
            <Row>
              <Col>
                <Form.Control
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.errors.firstName && formik.touched.firstName ? (
                  <p>{formik.errors.firstName}</p>
                ) : null}
              </Col>

              <Col>
                <Form.Control
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.errors.lastName && formik.touched.lastName ? (
                  <p>{formik.errors.lastName}</p>
                ) : null}
              </Col>
            </Row>
          </Container>
        </Form.Group>

        <Form.Group className="mb-3">
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

        <Form.Group className="mb-3">
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
            <p>{formik.errors.confirmPassword}</p>
          ) : null}
        </Form.Group>

        <Container>
          <Row>
            <Col
              as={Button}
              xs={{ span: 8, offset: 2 }}
              variant="primary"
              type="submit"
              onClick={(values) => {
                localStorage.setItem("firstName",formik.values.firstName);
                localStorage.setItem("lastName",formik.values.lastName);
                setTimeout(() => {
                  history.push("/login");
                }, 3000);
              }}
            >
              REGISTER
            </Col>
          </Row>
        </Container>
      </Form>
    </Container>
  );
};

export default Register;
