import React from "react";
import {Container, Button, Stack, Col, Row} from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Text from "./components/atoms/Text/index.jsx";

const Notification = (values) => {
    const {title} = values;
    console.log(title);
    // this searches for every first letter of a word
    const matches = title.match(/\b(\w)/g);
    console.log(matches);
    const initials = matches.toString().replace(',','');
    return (
        <Container>
            <Row>
                <Container as={Col} xs={{span: 2}} className="text-center">
                    <Container className="text-center m-0 p-2"
                    style={
                        {backgroundColor: "#285e61", 
                        color:"white",
                        height:"50px",
                        width:"50px",
                        borderRadius:"50%"}}
                    >
                    <strong>{initials}</strong>
                    </Container>
                </Container>
                <Container as={Col} xs={{span: 10}}>
                    <Stack gap={1}>
                    <Container className="m-0 p-0">
                        {title} was recently updated
                    </Container>
                    <Container className="m-0 p-0">
                        <em> one hour ago </em>
                    </Container>
                    </Stack>
                </Container>
            </Row>
        </Container>
    );
};

export default Notification;