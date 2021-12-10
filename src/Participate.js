import { useRef, useState, useEffect } from "react";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Container, Button, Form, Col, Row} from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Text from "./components/atoms/Text/index.jsx";
import { useHistory } from "react-router";
const Participate = () => {
    const inputFile = useRef(null);
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [disabled, setDisabled] = useState();
  
    useEffect(() => {
      if (!selectedFile) {
        setPreview(undefined);
        return;
      }
  
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
  
      return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);
  
    const onButtonClick = () => {
      inputFile.current.click();
    };
  
    const onSelectFile = (e) => {
      if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined);
        return;
      }
  
      setSelectedFile(e.target.files[0]);
    };
    let history = useHistory();
      
  
      const formik = useFormik({
          initialValues: {
            firstName:"",
            lastName:"",
            email:"",
            number:"",
            address:"",
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
            number:Yup.string().required(),
            address:Yup.string().required()
          }),
          onSubmit: (values) => {
            localStorage.setItem("first",values.first)
            localStorage.setItem("last",values.last)
            localStorage.setItem("email",values.email)
            localStorage.setItem("number",values.number)
            localStorage.setItem("address",values.addresss)
            setTimeout(() => {
              history.push("/dashboard");
            },2000)
          }
        });
      
    return (
          <Container className="mt-2">
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
            id="address"
            name="address"
            type="text"
            placeholder="Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
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
            id="number"
            name="number"
            type="number"
            placeholder="+63"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
          />
        </Form.Group>


        <Col xs={{ span: 12}} className="my-3">
          <Form.Check type="checkbox" label="I hereby declare that the above information is true." />
        </Col>
        <Container>
          <Row>
            <Col
              as={Button}
              xs={{ span: 8, offset: 2 }}
              variant="primary"
              type="submit"
            >
              Submit
            </Col>
          </Row>
        </Container>
      </Form>
    </Container>
    );
  };
  

export default Participate
