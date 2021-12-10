import React from "react";
import {Container, Button, Stack, Col, Row} from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Circle from "./components/atoms/Circle/index.js";
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
                    <Circle colorCode={"white"} bgColorCode={"#285e61"} size="50px" text={initials}/>
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