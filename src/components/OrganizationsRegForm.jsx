import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import GoogleLocator from "./GoogleLocator";



const OrganizationsRegForm = () => {
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleClose = () => { setShow(false); setShowAlert(false); }
    const handleShow = () => setShow(true);

    const handleAlertClose = () => setShowAlert(false);
    const handleAlertShow = () => setShowAlert(true);

    const isSuccess = false;

    const [doctor, setDoctor] = useState(false);
    const [teacher, setTeacher] = useState(false);


    const handleDoctor = () => {
        if (!doctor) {
            setDoctor(true);
            setTeacher(false);
        }
    }

    const handleTeacher = () => {
        if (!teacher) {
            setTeacher(true);
            setDoctor(false);
        }
    }

    const handleNo = () => {
        setDoctor(false);
        setTeacher(false);
    }


    const [selectedFiles, setSelectedFiles] = useState([]);


    const handleFileChange = (event) => {
        const files = event.target.files;
        setSelectedFiles(...selectedFiles, ...files);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true);
        //wait for 2 seconds then redirect to the home page
        setTimeout(() => {
            window.location.href = "/login";
        }, 6000);

    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Organization
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Donor Registeration </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {showAlert && <Alert variant='success'>
                        Your account has been created successfully, redirecting to the login page...
                    </Alert>}
                    {!showAlert &&
                        <Form style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} onSubmit={handleSubmit}>
                            <Form.Group style={{ width: "80%" }} controlId="exampleForm.ControlInput1">
                                <label htmlFor="first_name">First name</label>
                                <br />
                                <input className="input-field donor"
                                    type="text"
                                    placeholder="First name"
                                    name="first_name"
                                    autoFocus
                                    required
                                />
                            </Form.Group>
                            <Form.Group style={{ width: "80%" }} controlId="exampleForm.ControlInput1">
                                <Form.Label>Last name</Form.Label>
                                <br />
                                <input className="input-field donor"
                                    type="text"
                                    placeholder="Last name"
                                    required
                                />
                            </Form.Group>
                            <Form.Group style={{ width: "80%" }} controlId="exampleForm.ControlInput1">
                                <Form.Label>Gender</Form.Label>
                                <br />

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="option2" />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                </div>
                            </Form.Group>

                            <Form.Group style={{ width: "80%" }} controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <br />
                                <input className="input-field donor"
                                    type="email"
                                    placeholder="Email"
                                    required
                                />

                                <Form.Group style={{ width: "80%" }} controlId="exampleForm.ControlInput1">
                                    <Form.Label>Password</Form.Label>
                                    <br />
                                    <input className="input-field donor"
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />
                                </Form.Group>
                            </Form.Group>
                            <Form.Group style={{ width: "80%" }} controlId="exampleForm.ControlInput1">
                                <Form.Label>Contact number</Form.Label>
                                <br />
                                <input className="input-field donor"
                                    type="text"
                                    placeholder="Contact number"
                                    required
                                />

                            </Form.Group>


                            {/* <Form.Group style={{width: "80%"}} controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm password</Form.Label>
              <input className="input-field donor"
                type="password"
                placeholder="Confirm password"
              />
            </Form.Group> */}

                            <Form.Group style={{ width: "80%" }} controlId="exampleForm.ControlInput1">
                                <Form.Label>Organization name</Form.Label>
                                <br />
                                <input className="input-field donor"
                                    type="text"
                                    placeholder="Organization name"
                                    required
                                />
                            </Form.Group>

                            <Form.Group style={{ width: "80%" }} controlId="exampleForm.ControlInput1">
                                <Form.Label>Organization type</Form.Label>
                                <br />
                                <input className="input-field donor"
                                    type="text"
                                    placeholder="Organization type"
                                    required
                                />
                            </Form.Group>

                            <Form.Group style={{ width: "80%" }} controlId="exampleForm.ControlInput1">
                                <Form.Label>Organization address</Form.Label>
                                <br />
                                <input className="input-field donor"
                                    type="text"
                                    placeholder="Organization address"
                                    required
                                />
                            </Form.Group>

                            <Form.Group style={{ width: "80%" }} controlId="exampleForm.ControlInput1">
                                <Form.Label>Area</Form.Label>
                                <br />
                                <input className="input-field donor"
                                    type="text"
                                    placeholder="Area"
                                    required
                                />
                            </Form.Group>

                            <Form.Group style={{ width: "80%" }} controlId="exampleForm.ControlInput1">
                                <Form.Label>Governorate</Form.Label>
                                <br />
                                <input className="input-field donor"
                                    type="text"
                                    placeholder="Governorate"
                                    required
                                />
                            </Form.Group>


                            <Form.Group style={{ width: "80%" }} controlId="exampleForm.ControlInput1">
                                <Form.Label>Google marker</Form.Label>
                                <GoogleLocator />

                            </Form.Group>



                            <Form.Label>upload your document(s) </Form.Label>


                            <div>
                                <input type="file" onChange={handleFileChange} multiple />
                            </div>


                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button type="submit" variant="secondary" >
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </Form>}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default OrganizationsRegForm;