import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimaryButton from "./components/atoms/PrimaryButton/index";
import SecondaryButton from "./components/atoms/SecondaryButton/index";
import {Container, Stack} from "react-bootstrap";
import logo from "./assets/Logo.png";
import { Link } from "react-router-dom";  
const Main = () => {
    return (
        <Container fluid className="p-0 mx-auto">
            <img src={logo} className="my-3" />
            <Stack gap={2}  style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
             <Link to="/userType"><PrimaryButton > REGISTER </PrimaryButton> </Link>
             <Link to="/login"><SecondaryButton > LOG IN  </SecondaryButton> </Link>
            </Stack>    
        </Container>
    );
}   

export default Main;