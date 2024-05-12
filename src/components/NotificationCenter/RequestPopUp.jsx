import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "../Donation/customStyle.css";
import { useState } from "react";
import styled from "styled-components";
import { Divider } from "@mantine/core";
import { Container } from "react-bootstrap";
import DonationDetialsModal from "../Donation/DonationDetialsModal";
import AccountDetailsPopUp from "./AccountDetailsPopUp";

// const[showPost, setShowPost] = useState(false);
// const handleShowPost = () => {setShowPost(true);};

const ProfilePicture = styled.img`
  border-radius: 0.6rem;
  width: 6rem;
  height: 6rem;
  object-fit: contain;
  margin: 0.5rem;
`;

const OrganizationNameHeader = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  font-size: 0.9rem;
`;

const DetialsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;



const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
`;

const RequestPopUp = ({ show, back ,handleShowAccountDetails,handleShowPost}) => {
  const [validated, setValidated] = useState(false);
  const [alertFlag, setAlertFlag] = useState(false);

  const handleClose = () => {
    back();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.currentTarget.checkValidity() === false) {
      setValidated(true);
    } else {
      setValidated(false);
      event.target.reset();
      setAlertFlag(true);
      setTimeout(() => {
        setAlertFlag(false);
        handleClose();
      }, 2000);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Donation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <h5>
            This user wants to fulfill donatin post <a href="#" onClick={handleShowPost}>#123</a>
            </h5>
            
            <div
      className="border rounded border-1 m-2"
      style={{ borderColor: "#edeeee" }}
    >
      <Container>
        <InfoContainer>
          <OrganizationNameHeader>
            Farid youns
          </OrganizationNameHeader>
          <span>phone No. : 010982482374824</span>
          <span>mail : alksjdf@ksdjfhhs.com</span>
          <a
            
            href="#"
            onClick={handleShowAccountDetails}
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            view profile
          </a>
        </InfoContainer>
      </Container>
    </div>
    
            <Divider margins="md" label="Donation Details" />
            <DetialsContainer>
              <InfoContainer>
                <Info>
                  <span style={{ flexBasis: "50%" }}>Quantity</span>
                  <span style={{  fontWeight: "bold" }}>
                    1KG of Rice
                  </span>
                </Info>
              </InfoContainer>
              <InfoContainer>
                <Info>
                  <span style={{ flexBasis: "50%" }}>Additional Details</span>
                  <span style={{ fontWeight: "bold" }}>
                   Lorem, ipsum dolor.
                  </span>
                </Info>
              </InfoContainer>
            </DetialsContainer>
          </div>
          
          <Divider margins="md" label="Schedule Pickup" />
          <Form
            className="d-flex flex-column justify-content-center"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Time Slot </Form.Label>
              <Form.Control type="datetime-local" required />
              <Form.Control.Feedback type="invalid">
                Please choose a time slot.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAdditionalDetails">
              <Form.Label>Acknowledge Donor Contributions</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter gentle message to the donor..."
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Alert
            variant="success"
            style={{ marginTop: "10px", textAlign: "center" }}
            show={alertFlag}
          >
            Donation scheduled&#128154;
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RequestPopUp;
