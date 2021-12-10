import React from "react";
import { Container } from "react-bootstrap";

const Circle = (values) => {
    const {size, colorCode, bgColorCode, text} = values;

    return (
        <Container className="text-center m-0 p-2"
                    style={
                        {backgroundColor: bgColorCode, 
                        color:colorCode,
                        height:size,
                        width:size,
                        borderRadius:"50%"}}
                    >
                    <strong>{text}</strong>
                    </Container>
    );
};
export default Circle;