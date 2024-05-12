import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import GoogleLocator from "./GoogleLocator";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Spinner } from "react-bootstrap";

const OrganizationsRegForm = () => {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [governorate, setGovernorate] = useState("");
  const handleClose = () => {
    setShow(false);
    setShowAlert(false);
    setValidated(false);
  };
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<FiEyeOff className="icon" />);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(...selectedFiles, ...files);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const blob = new Blob([file], { type: file.type });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = file.name;
      link.click();
    }
  };
  const styling = {
    width: "100%",
    padding: "10px",
    borderRadius: "100px",
    transition: "0.5s",
  };

  const formGroupStyling = {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    padding: "5px",
  };

  const formGroupStylingRadios = {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    padding: "5px",
  };
  const labelStyling = {
    fontSize: "18px",
    textDecoration: "underline",
    fontWeight: "bold",
    color: "#0ca678",
  };

  const modalTitleStyling = {
    color: "#0ca678",
    fontSize: "30px",
    fontWeight: "bold",
  };
  const eyeIconStyling = !validated
    ? {
        position: "relative",
        left: "93%",
        bottom: "35px",
        cursor: "pointer",
      }
    : {
        position: "relative",
        left: "90%",
        bottom: "35px",
        cursor: "pointer",
      };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(<FiEye className="icon" />); // Change icon to FiEye when showing password
      setType("text");
    } else {
      setIcon(<FiEyeOff className="icon" />); // Change icon to FiEyeOff when hiding password
      setType("password");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail(event.target[3].value);
    setPassword(event.target[4].value);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      setShowAlert(true);
      setTimeout(() => {
        window.location.href = "/login";
      }, 5000);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Organization Registeration
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title style={modalTitleStyling}>
            Organization Registeration{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showAlert && (
            <Alert variant="success">
              Your account has been created successfully, redirecting to the
              login page...
              <Spinner animation="border" size="sm" className="ms-2" /> <br />
              Your email: {email}
              <br />
              Your password: {password}
            </Alert>
          )}
          {!showAlert && (
            <Form
              noValidate
              validated={validated}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              onSubmit={handleSubmit}
            >
              <Form.Group style={formGroupStyling}>
                <Form.Label style={labelStyling}>First name:</Form.Label>

                <Form.Control
                  style={styling}
                  type="text"
                  placeholder="First name"
                  name="first_name"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your first name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group style={formGroupStyling}>
                <Form.Label style={labelStyling}>Last name:</Form.Label>

                <Form.Control
                  style={styling}
                  type="text"
                  placeholder="Last name"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your last name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group style={formGroupStylingRadios}>
                <Form.Label style={labelStyling}>Gender:</Form.Label>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions1"
                    id="inlineRadio1"
                    value="option1"
                    required
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions1"
                    id="inlineRadio2"
                    value="option2"
                    required
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Female
                  </label>
                </div>
              </Form.Group>

              <Form.Group style={formGroupStyling}>
                <Form.Label style={labelStyling}>Email:</Form.Label>

                <Form.Control
                  style={styling}
                  type="email"
                  placeholder="Email"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email: example@dom.com
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group style={formGroupStyling}>
                <Form.Label style={labelStyling}>Password:</Form.Label>

                <Form.Control
                  style={styling}
                  type={type}
                  placeholder="Password"
                  required
                />
                <div style={eyeIconStyling} onClick={handleToggle}>
                  {icon}
                </div>
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group style={formGroupStyling}>
                <Form.Label style={labelStyling}>Contact number:</Form.Label>

                <Form.Control
                  style={styling}
                  type="text"
                  placeholder="Contact number"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your contact number.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group style={formGroupStyling}>
                <Form.Label style={labelStyling}>Organization name:</Form.Label>

                <Form.Control
                  style={styling}
                  type="text"
                  placeholder="Organization name"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your organization name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group style={formGroupStyling}>
                <Form.Label style={labelStyling}>Organization type:</Form.Label>

                <Form.Control
                  style={styling}
                  type="text"
                  placeholder="Organization type"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your organization type.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group style={formGroupStyling}>
                <Form.Label style={labelStyling}>
                  Organization address:
                </Form.Label>
                {address !== "" ? (
                  <Form.Control
                    style={styling}
                    type="text"
                    placeholder="Organization Address"
                    required
                    value={address}
                  />
                ) : (
                  <Form.Control
                    style={styling}
                    type="text"
                    placeholder="Organization Address"
                    required
                  />
                )}
                <Form.Control.Feedback type="invalid">
                  Please provide your organization address.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group style={formGroupStyling}>
                <Form.Label style={labelStyling}>Area:</Form.Label>
                {area !== "" ? (
                  <Form.Control
                    style={styling}
                    type="text"
                    placeholder="Organization Area"
                    required
                    value={area}
                  />
                ) : (
                  <Form.Control
                    style={styling}
                    type="text"
                    placeholder="Organization Area"
                    required
                  />
                )}
                <Form.Control.Feedback type="invalid">
                  Please provide your organization area.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group style={formGroupStyling}>
                <Form.Label style={labelStyling}>Governorate:</Form.Label>
                {governorate !== "" ? (
                  <Form.Control
                    style={styling}
                    type="text"
                    placeholder="Governorate"
                    required
                    value={governorate}
                  />
                ) : (
                  <Form.Control
                    style={styling}
                    type="text"
                    placeholder="Governorate"
                    required
                  />
                )}
                <Form.Control.Feedback type="invalid">
                  Please provide your governorate.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group style={formGroupStyling}>
                <Form.Label style={labelStyling}>
                  <i>OR</i>
                  <br />
                  Pin your organization location:
                </Form.Label>
                <GoogleLocator
                  getAddress={(address) => setAddress(address)}
                  getArea={(area) => setArea(area)}
                  getGovernorate={(governorate) => setGovernorate(governorate)}
                />
              </Form.Group>
              <Form.Group style={formGroupStyling}>
                <Form.Label style={labelStyling}>
                  upload your document(s) :
                </Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleFileChange}
                  multiple
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please upload your document(s).
                </Form.Control.Feedback>
              </Form.Group>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="secondary">
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OrganizationsRegForm;
