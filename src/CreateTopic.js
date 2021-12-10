import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Container, Button, Form, Col, Row} from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Text from "./components/atoms/Text/index.jsx";
import { useParams } from "react-router";
import axios from "axios";
const CreateTopic = () => {
    
    const { topic } = useParams();

    const formik = useFormik({
        initialValues: {
          title: "",
          description: "",
          category: "",
          link: "",
        },
        validationSchema: Yup.object({
          title: Yup.string()
            .max(256, "Title is too long!")
            .required("Please enter the title"),
          description: Yup.string()
            .required("Please enter a description"),
          category: Yup.string()
            .required("Please choose a category"),
          link: Yup.string()
        }),
        onSubmit: (values) => {
          const data = {topic, ...values};

          const response = axios
            .post("http://localhost:8000/topics", data)
            .catch((err) => {
              if (err && err.response) {
                console.log("Error: ", err);
              }
            });
    
          if (response && response.data) {
            console.log(response.data.message);
          }
        }
      });
    
  return (
        <Container>
          <Text variant="h2" >New {topic}</Text>
    
          <Form onSubmit={formik.handleSubmit}>

            <Form.Group className="mb-3">
              <Container className="p-0 m-0">
                <Row>
                  <Col>
                    <Form.Label> Title</Form.Label>
                    <Form.Control
                      id="title"
                      name="title"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.title}
                    />
                    {formik.errors.title && formik.touched.title ? (
                      <p>{formik.errors.title}</p>
                    ) : null}
                  </Col>
                </Row>
              </Container>
            </Form.Group>
    
            <Form.Group className="mb-3">
            <Form.Label> Description </Form.Label>
              <Form.Control
                id="description"
                name="description"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              />
              {formik.errors.description && formik.touched.description ? (
                <p>{formik.errors.description}</p>
              ) : null}
            </Form.Group>
    
            <Form.Group className="mb-3">
              <Form.Label> Category </Form.Label>
              <Form.Select
                id="category"
                name="category"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
              >
                <option value="Education">Education</option>
                <option value="Social">Social</option>
                <option value="Employment">Employment</option>
                <option value="Health">Health</option>
                <option value="Environment">Environment</option>
              </Form.Select>
              {formik.errors.category && formik.touched.category ? (
                <p>{formik.errors.category}</p>
              ) : null}
            </Form.Group>
    
            <Form.Group className="mb-3">
              <Form.Label> Link </Form.Label>
              <Form.Control
                id="link"
                name="link"
                type="text"
                placeholder="Type the link here"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.link}
              />
              {formik.errors.link && formik.touched.link ? (
                <p>{formik.errors.link}</p>
              ) : null}
            </Form.Group>

            <Container>
              <Row>
                <Col
                  as={Button}
                  xs={{ span: 8, offset: 2 }}
                  variant="primary"
                  type="submit"
                >
                  SUBMIT
                </Col>
              </Row>
            </Container>

          </Form>
      </Container>
  );
};

export default CreateTopic;