import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
function DonationSubmitForm() {
    const [transportationType, setTransportationType] = useState("");
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.currentTarget.checkValidity() === false) {
            setValidated(true);
        }
        else {
            setValidated(false);
            event.target.reset();
            setTransportationType("")

        }
    }
    return (
        <div className="border rounded border-1 m-2"
            style={{ borderColor: "#edeeee" }}>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={{ justifyContent: 'center' }}> Donate </Accordion.Header>
                    <Accordion.Body >
                        <Form className='d-flex flex-column justify-content-center' noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label> Quantity </Form.Label>
                                <Form.Control type="number" required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a quantity.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Type Of Transportation</Form.Label>
                                <select className="form-select"
                                    value={transportationType}
                                    onChange={(event) => setTransportationType(event.target.value)

                                    }
                                    required
                                >
                                    <option value="" disabled>Please Select</option>
                                    <option value="Truck">Truck</option>
                                    <option value="Car">Car</option>
                                    <option value="Momotorcycle">Momotorcycle</option>
                                </select>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label> Time Slot </Form.Label>
                                <Form.Control type="datetime-local" required />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a time slot.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <Alert key={1} variant="success">
                           Thank you for your support!
                        </Alert>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default DonationSubmitForm
