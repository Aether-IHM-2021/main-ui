import { Container, Form, Col, Row, Alert } from "react-bootstrap";
import { useHistory } from "react-router";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import Text from "./components/atoms/Text/index.jsx";
import "./index.css";
const Verification = () => {
  let history = useHistory();
  return (
    <>
      <header>
        <Text variant="h3" className="py-3">
          {" "}
          PERSONAL VERIFICATION{" "}
        </Text>
      </header>
      <label>Choose Region</label>
      <Form.Select aria-label="City" className="my-2">
        <option>Select Region...</option>
        <option value="1">National Capital Region (NCR)</option>
        <option value="2">Cordillera Administrative Region (CAR)</option>
        <option value="3">Ilocos Region (Region I)</option>
        <option value="4">Cagayan Valley (Region II)</option>
        <option value="5">Central Luzon (Region III)</option>
        <option value="6">Calabarzon (Region IV-A)</option>
        <option value="7">Southwestern Tagalog Region (Mimaropa)</option>
        <option value="8">Bicol Region (Region V)</option>
        <option value="9">Western Visayas (Region VI)</option>
        <option value="10">Central Visayas (Region VII)</option>
        <option value="11">Eastern Visayas (Region VIII)</option>
        <option value="12">Zamboanga Peninsula (Region IX)</option>
        <option value="13">Northern Mindanao (Region X)</option>
        <option value="14">Davao Region (Region XI)</option>
        <option value="15">Soccsksargen (Region XII)</option>
        <option value="16">Caraga (Region XIII)</option>
        <option value="17">Bangsamoro (BARMM)</option>
      </Form.Select>
      <label>Choose City</label>
      <Form.Select aria-label="City" className="my-3">
        <option>Select City...</option>
        <option value="1">Caloocan</option>
        <option value="2">Las Piñas</option>
        <option value="3">Makati</option>
        <option value="4">Malabon</option>
        <option value="5">Mandaluyong</option>
        <option value="6">Manila</option>
        <option value="7">Marikina</option>
        <option value="8">Muntinlupa</option>
        <option value="9">Navotas</option>
        <option value="10">Parañaque</option>
        <option value="11">Pasay</option>
        <option value="12">Pasig </option>
        <option value="13">Pateros</option>
        <option value="14">Quezon City</option>
        <option value="15">San Juan</option>
        <option value="16">Valenzuela</option>
      </Form.Select>
      <p>Provide a valid government-issued document</p>
      <small className="text-muted my-2">
        Only the stated documents listed below will be accepted, all other
        documents will be rejected.
      </small>
      <Alert
        variant="success"
        style={{ cursor: "pointer" }}
        className="isActive"
      >
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          {" "}
          <strong className="mb-0">Government-Issued ID Card</strong>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <BsFillExclamationCircleFill />
            <span style={{ marginLeft: "5px" }}>
              Find out all supported documents
            </span>
          </div>
        </button>
      </Alert>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Accepted documents
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {" "}
              <ul>
                <li>Election Voter ID</li>
                <li>Unified Multi-purpose ID</li>
                <li>Postal ID</li>
                <li>Professional Regulation Commission ID </li>
                <li>Social Security System ID</li>
              </ul>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                width="100"
                onClick={() => history.push("/verify2")}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
      <Alert
        variant="success"
        style={{ cursor: "pointer" }}
        className="isActive"
      >
        <strong className="mb-0">Driver's License</strong>
      </Alert>
      <Alert
        variant="success"
        style={{ cursor: "pointer" }}
        className="isActive"
      >
        <strong className="mb-0">Passport</strong>
      </Alert>
      <Row>
        <div className="col-sm-12 d-flex justify-content-end">
          <button type="button" className="btn btn-primary">
            Next
          </button>
        </div>
      </Row>
    </>
  );
};

export default Verification;
