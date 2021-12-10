import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Container, Button, Col, Row, Stack} from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Text from "./components/atoms/Text/index.jsx";
import Notification from "./Notification";
import { useParams } from "react-router";
import axios from "axios";

const Notifications = () => {

    return (
        <Container> 
            <Text variant="h2">Notifications</Text>
            <Stack gap={4}>
            <Notification title={"Project Lingkod"} />
            <Notification title={"Cleanup Maginhawa"} />
            </Stack>
            
        </Container>
    );
};

export default Notifications;