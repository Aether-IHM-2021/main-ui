import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimaryButton from "./components/atoms/PrimaryButton/index";
import SecondaryButton from "./components/atoms/SecondaryButton/index";
import {Container, Stack} from "react-bootstrap";
import logo from "./assets/Logo.png";
const Main = () => {
    return (
        <Container fluid className="p-0 mx-auto">
            <img src={logo} className="my-3" />
            <Stack gap={2} style={{flex: 1, flexDirection: 'column', justifyContents: 'center'}}>
             <PrimaryButton > REGISTER </PrimaryButton> 
             <SecondaryButton > LOG IN  </SecondaryButton> 
            </Stack>    
        </Container>
    );
}   

export default Main;