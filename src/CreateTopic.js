import { useRef, useState, useEffect } from "react";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Container, Button, Form, Col, Row} from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Text from "./components/atoms/Text/index.jsx";
import { useParams } from "react-router";
import axios from "axios";
import { useHistory } from "react-router";

const CreateTopic = () => {
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
          localStorage.setItem("title",values.title)
          localStorage.setItem("description",values.description)
          localStorage.setItem("category",values.category)
          localStorage.setItem("link",values.link)
          setTimeout(() => {
            history.push("/dashboard");
          },2000)
          // let data = {};
          // // conditional values for topics
          // if(topic === "proposals"){
          //   const likes = 0;
          //   const concerns = 0;
          //   const concernsArray = Array();
          //   data = {topic, likes, concerns, concernsArray, ...values};
          // }
          // else if(topic === "announcements"){
          //   data = {topic, ...values};
          // }
          // else if(topic === "concerns"){
          //   const proposalsId = 0;
          //   data = {topic, proposalsId, ...values};
          // }
          // else{}

    //       const response = axios
    //         .post("http://localhost:8000/topics", data)
    //         .catch((err) => {
    //           if (err && err.response) {
    //             console.log("Error: ", err);
    //           }
    //         });
    // 
    //       if (response && response.data) {
    //         console.log(response.data.message);
    //       }
        }
      });
    
  return (
        <Container className="mt-2">
          <Text variant="h2" >New Proposal</Text>
    
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
            Add a Photo or Video
            <div class="my-3 card-body bg-grey d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn btn-light"
              onClick={onButtonClick}
            >
              Upload Photo
              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={onSelectFile}
              />
            </button>
          </div>
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