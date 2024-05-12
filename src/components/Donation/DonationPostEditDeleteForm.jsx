import { Button } from "@mantine/core";
import {  Modal } from "react-bootstrap";
import DeleteConfirmationModal from "../DeleteConfirmationModal";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
// import { Modal } from "react-bootstrap/Modal";

const DonationPostEditDeleteForm = ({ item, deletePost, setShowDetails  }) => {
  const [show, setShow] = useState(false);
  const handleBack = () => {
    setShow(false);
    // setHide(true);
    // back();
  };
  const [title, setTitle] = useState("Food for Homeless");
  const [quantity, setQuantity] = useState("25");
  const [additionalDetails, setAdditionalDetails] = useState(
    "There are many homeless people in the streets we need to help them as a part of giving back of what we have"
  );
  //Errors
  const [titleError, setTitleError] = useState("");
  const [quantityError, setQuantityError] = useState("");

  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);


  const handleClose = () => {
    // resetInsertions();
    setShow(false);
    setSuccess(false);
    setShowAlert(false);
  };

  // const handleBack = () => {
  //     resetInsertions();
  //     back();
  // }

  const back1 = ()=>{
    setShow(true);
  }
  const hide = ()=>{
    setShow(false);
  }

  const handleSubmit = () => {
    if (title === "") {
      setTitleError("Title is required");
    } else {
      setTitleError("");
    }
    if (quantity === "") {
      setQuantityError("Quantity is required");
    } else {
      setQuantityError("");
    }
    if (title !== "" && quantity !== "") {
      setAlertMessage("Post Edited Successfully!");
      setShowAlert(true);
      setSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 4000);
    }
  };

  const [isSuccess, setSuccess] = useState(false);
  return (
    <>
      <div style={{display : 'flex' ,flexDirection : 'row' , float : 'right' , width : '130%' , justifyContent: 'flex-end'  , gap : '5px' }}>
        <Button
          onClick={() => {
            setShow(true);
          }}
          color="grey"
        >
          Edit Post
        </Button>
        <DeleteConfirmationModal
          item={item}
          deletePost={deletePost}
          back={back1}
          hide={hide}
          setShowDetails = {setShowDetails} 
        />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        {showAlert && (
          <Alert
            style={{ textAlign: "center" }}
            variant={isSuccess ? "success" : "danger"}
          >
            {alertMessage}. Redirecting{" "}
            <Spinner animation="border" size="sm" className="ms-2" />
          </Alert>
        )}
        <Modal.Body>
          {/* {showAlert&&<Alert variant={(isSuccess)?'success':'danger'}>
                {alertMessage}
            </Alert>} */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>
                Title
                {titleError ? <span className="text-danger"> *</span> : null}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                isInvalid={titleError}
                disabled = {showAlert}
              />
              <Form.Control.Feedback type="invalid">
                {titleError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicQuantity">
              <Form.Label>
                Quantity
                {quantityError ? <span className="text-danger"> *</span> : null}
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quantity in KG if fruits and vegetables and amount for the rest"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                isInvalid={quantityError}
                disabled = {showAlert}

              />
              <Form.Control.Feedback type="invalid">
                {quantityError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAdditionalDetails">
              <Form.Label>Additional Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter additional details"
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                disabled = {showAlert}

              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button color='grey'  onClick={handleBack}>
            Back
          </Button>
          <Button color='teal'  onClick={handleSubmit}>
            Save Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DonationPostEditDeleteForm;
