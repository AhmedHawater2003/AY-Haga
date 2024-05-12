import React, { useState } from "react";
import logo from "../assets/logo_no_bg.png";
import bg from "../assets/login_bg.jpg";
import { FiEyeOff, FiEye } from "react-icons/fi"; // Import eye and eyeOff icons from react-icons/fi
import { SlArrowLeftCircle } from "react-icons/sl";
import { Alert, Button, Form } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [right, setRight] = useState(false);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<FiEyeOff className="icon" />); // Initialize icon state with FiEyeOff icon
  const handleToggle = () => {
    if (type === "password") {
      setIcon(<FiEye className="icon" />); // Change icon to FiEye when showing password
      setType("text");
    } else {
      setIcon(<FiEyeOff className="icon" />); // Change icon to FiEyeOff when hiding password
      setType("password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target[0].value);
    setPassword(e.target[1].value);
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      setValidated(false);
      if (email === "marina@gmail.com" && password === "guc2021") {
        setRight(true);
        setWrong(false);
        setTimeout(() => {
          window.location.href = "/admin";
        }, 5000);
      } else {
        setWrong(true);
        setRight(false);
      }
    }
  };
  const styling = {
    width: "100%",
    padding: "10px",
    borderRadius: "100px",
    transition: "0.5s",
  };

  const formGroupStyling = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    padding: "5px",
  };

  const labelStyling = {
    fontSize: "18px",
    textDecoration: "underline",
    fontWeight: "bold",
    color: "#0ca678",
  };

  const eyeIconStyling = !validated
    ? {
        position: "relative",
        left: "44%",
        bottom: "35px",
        cursor: "pointer",
      }
    : {
        position: "relative",
        left: "40%",
        bottom: "35px",
        cursor: "pointer",
      };

  return (
    <div className="maincontainer">
      <div
        className="container-fluid"
        style={{
          margin: "200px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.9)",
          borderRadius: "20px",
        }}
      >
        <div className="row no-gutter">
          <div className="col p-0">
            <div
              className="login d-flex align-items-center"
              style={{ height: "100%" }}
            >
              <div className="container" style={{ height: "100%" }}>
                <div className="row form">
                  <a className="login-link" href="/">
                    <p className="login-text2">
                      <SlArrowLeftCircle />
                      Back To Home
                    </p>
                  </a>
                  <div className="col-lg-10 text-center mx-auto">
                    <div className="login-logo-container">
                      <img className="login-logo" src={logo} alt="" />
                    </div>
                    <p className="login-title">Login</p>
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
                      {wrong && (
                        <Form.Group style={formGroupStyling}>
                          <Alert variant="danger" style={{ width: "100%" }}>
                            Invalid Email or Password
                          </Alert>
                        </Form.Group>
                      )}
                      {right && (
                        <Form.Group style={formGroupStyling}>
                          <Alert variant="success" style={{ width: "100%" }}>
                            Successfully Logged In Redirecting to Admin Page
                          </Alert>
                        </Form.Group>
                      )}
                      <Form.Group style={formGroupStyling}>
                        <Form.Label style={labelStyling}>Email:</Form.Label>

                        <Form.Control
                          style={styling}
                          type="email"
                          placeholder="Email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
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
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div style={eyeIconStyling} onClick={handleToggle}>
                          {icon}
                        </div>
                        <Form.Control.Feedback type="invalid">
                          Please provide a password.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Button
                        type="submit"
                        style={{ marginTop: "10px", width: "100%" }}
                      >
                        SignIn
                      </Button>
                    </Form>
                    <div className="text-center mt-4">
                      <div className="login-text">Don't Have An Account?</div>
                      <a href="/register">
                        <button
                          className="btn text-uppercase"
                          style={{ marginBottom: "15px" }}
                        >
                          Register
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-0">
            <img src={bg} alt="" className="login-bg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
