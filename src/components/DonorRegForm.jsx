import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import GoogleLocator from "./GoogleLocator";
import { FiEyeOff, FiEye } from "react-icons/fi"; // Import eye and eyeOff icons from react-icons/fi
import { Spinner } from "react-bootstrap";

const DonorRegForm = () => {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [governorate, setGovernorate] = useState("");
  const handleClose = () => {
    setShow(false);
    setShowAlert(false);
    setValidated(false);
    handleNo();
  };
  const handleShow = () => setShow(true);

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<FiEyeOff className="icon" />);
  const handleToggle = () => {
    if (type === "password") {
      setIcon(<FiEye className="icon" />); // Change icon to FiEye when showing password
      setType("text");
    } else {
      setIcon(<FiEyeOff className="icon" />); // Change icon to FiEyeOff when hiding password
      setType("password");
    }
  };

  const [doctor, setDoctor] = useState(false);
  const [teacher, setTeacher] = useState(false);
  const handleDoctor = () => {
    if (!doctor) {
      setDoctor(true);
      setTeacher(false);
    }
  };

  const handleTeacher = () => {
    if (!teacher) {
      setTeacher(true);
      setDoctor(false);
    }
  };

  const handleNo = () => {
    setDoctor(false);
    setTeacher(false);
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

  const [selectedFiles, setSelectedFiles] = useState([]);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setMail(event.target[4].value);
    setPassword(event.target[6].value);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
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
        Donor Registeration
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title style={modalTitleStyling}>
            Donor Registeration
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showAlert && (
            <Alert variant="success">
              Your account has been created successfully, redirecting to the
              login page...
              <Spinner animation="border" size="sm" className="ms-2" />
              <br />
              Your email: {mail}
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
                  autoFocus
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
                    value="option1"
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
                <Form.Label style={labelStyling}>Address:</Form.Label>

                <Form.Control
                  style={styling}
                  type="text"
                  placeholder="Address"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your address.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group style={formGroupStyling}>
                <Form.Label style={labelStyling}>Area:</Form.Label>

                <Form.Control
                  style={styling}
                  type="text"
                  placeholder="Area"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your area.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group style={formGroupStyling}>
                <Form.Label style={labelStyling}>Governorate:</Form.Label>

                <Form.Control
                  style={styling}
                  type="text"
                  placeholder="Governorate"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your governorate.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group style={formGroupStyling}>
                <Form.Label style={labelStyling}>Account type:</Form.Label>

                <div
                  className="form-check
              form-check-inline"
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    onChange={handleDoctor}
                    name="inlineRadioOptions2"
                    id="inlineRadio3"
                    value="option3"
                    required
                  />
                  <label className="form-check-label" htmlFor="inlineRadio3">
                    Pro-bono Doctor
                  </label>
                </div>
                <div
                  className="form-check
              form-check-inline"
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    onChange={handleTeacher}
                    name="inlineRadioOptions2"
                    id="inlineRadio4"
                    value="option4"
                    required
                  />
                  <label className="form-check-label" htmlFor="inlineRadio4">
                    Pro-bono Teacher
                  </label>
                </div>
                <div
                  className="form-check
              form-check-inline"
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    onChange={handleNo}
                    name="inlineRadioOptions2"
                    id="inlineRadio5"
                    value="option5"
                    required
                  />
                  <label className="form-check-label" htmlFor="inlineRadio5">
                    {" "}
                    Regular donor
                  </label>
                </div>
              </Form.Group>

              {doctor && (
                <>
                  <Form.Group style={formGroupStyling}>
                    <Form.Label style={labelStyling}>
                      Upload your profession document(s) :
                    </Form.Label>

                    <Form.Control
                      style={{ marginBottom: "10px" }}
                      type="file"
                      onChange={handleFileChange}
                      multiple
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please upload your document(s).
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Label style={labelStyling}>Clinic details:</Form.Label>

                  <Form.Group style={formGroupStyling}>
                    <Form.Label style={labelStyling}>
                      Clinic Address:
                    </Form.Label>
                    {address !== "" ? (
                      <Form.Control
                        style={styling}
                        type="text"
                        placeholder="Address"
                        required
                        value={address}
                      />
                    ) : (
                      <Form.Control
                        style={styling}
                        type="text"
                        placeholder="Address"
                        required
                      />
                    )}
                    <Form.Control.Feedback type="invalid">
                      Please provide your clinic address.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group style={formGroupStyling}>
                    <Form.Label style={labelStyling}>Clinic Area:</Form.Label>
                    {area !== "" ? (
                      <Form.Control
                        style={styling}
                        type="text"
                        placeholder="Area"
                        required
                        value={area}
                      />
                    ) : (
                      <Form.Control
                        style={styling}
                        type="text"
                        placeholder="Area"
                        required
                      />
                    )}
                    <Form.Control.Feedback type="invalid">
                      Please provide your clinic area.
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
                      Please provide your clinic governorate.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group style={formGroupStyling}>
                    <Form.Label style={labelStyling}>
                      <i>OR</i>
                      <br /> Pin Your Clinic Location:
                    </Form.Label>
                    <GoogleLocator
                      getAddress={(address) => setAddress(address)}
                      getArea={(area) => setArea(area)}
                      getGovernorate={(governorate) =>
                        setGovernorate(governorate)
                      }
                    />
                  </Form.Group>

                  <Form.Group style={formGroupStyling}>
                    <Form.Label style={labelStyling}>
                      Your Specialty:
                    </Form.Label>

                    <Form.Control
                      style={styling}
                      type="text"
                      placeholder="Specialty"
                      required
                    />
                  </Form.Group>

                  <Form.Group style={formGroupStyling}>
                    <Form.Label style={labelStyling}>
                      Number of pro-bonos cases:
                    </Form.Label>

                    <Form.Control
                      style={styling}
                      type="number"
                      placeholder="Number of pro-bonos cases you can help"
                      required
                    />
                  </Form.Group>
                </>
              )}

              {teacher && (
                <>
                  <Form.Group style={formGroupStyling}>
                    <Form.Label style={labelStyling}>
                      Upload your profession document(s):
                    </Form.Label>
                    <Form.Control
                      type="file"
                      onChange={handleFileChange}
                      multiple
                      required
                    />
                  </Form.Group>

                  <Form.Group style={formGroupStyling}>
                    <Form.Label style={labelStyling}>Subjects:</Form.Label>

                    <Form.Control
                      style={styling}
                      type="text"
                      placeholder="Subjects you can teach"
                      required
                    />
                  </Form.Group>

                  <Form.Group style={formGroupStyling}>
                    <Form.Label style={labelStyling}>
                      Number of pro-bono classes:
                    </Form.Label>

                    <Form.Control
                      style={styling}
                      type="number"
                      placeholder="Number of pro-bono classes you can teach"
                      required
                    />
                  </Form.Group>

                  <Form.Group style={formGroupStyling}>
                    <Form.Label style={labelStyling}>
                      Number of pro-bono students:
                    </Form.Label>

                    <Form.Control
                      style={styling}
                      type="number"
                      placeholder="Number of pro-bono students you can help"
                      required
                    />
                  </Form.Group>
                </>
              )}

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

export default DonorRegForm;
