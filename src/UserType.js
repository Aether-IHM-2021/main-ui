import React from "react";
import { Stack, Button, Image } from "react-bootstrap";
import citizen from "./assets/Citizen.png";
import official from "./assets/Official.png";
import { Link } from "react-router-dom";
import Text from "./components/atoms/Text/index.jsx";
const UserType = () => {
  return (
    <Stack gap={4} className="m-auto" style={{ margin: "auto" }}>
      <Text variant="h2" style={{ textAlign: "center", margin: "15px" }}>
        I am a
      </Text>
      <Link to="/register/citizen">
        <Button
          as={Image}
          src={citizen}
          style={{ backgroundColor: "transparent", border: "0" }}
        ></Button>
      </Link>
      <Link to="/register/official">
        <Button
          as={Image}
          src={official}
          style={{ backgroundColor: "transparent", border: "0" }}
        ></Button>
      </Link>
    </Stack>
  );
};
export default UserType;
