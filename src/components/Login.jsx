import React, { useState } from "react";
import logo from "../assets/logo_no_bg.png";
import bg from "../assets/login_bg.jpg";
import { SlArrowLeftCircle } from "react-icons/sl";
import { PasswordInput, Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Alert, Fade } from "react-bootstrap";
import { Spinner } from 'react-bootstrap';
import { AdminData } from "../data/AdminData";

const Login = () => {
  const [wrong, setWrong] = useState(false);
  const [right, setRight] = useState(false);

  const textDanger = {
    color: "red",
    fontSize: "15px",
    fontWeight: "bold",
  };

  const alertBox = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    backgroundColor: "#ffdddd",
    borderRadius: "10px",
    padding: "5px",
  };



  const form = useForm({
    initialValues: { name: '', password: '' },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length === 0 && 'Password is required'),
    },
  });

  const handleSubmit = () => {
    if (form.values.email === AdminData[0].email && form.values.password === AdminData[0].password) {
      setRight(true);
      setWrong(false);
      setTimeout(() => {
        window.location.href = "/admin";
      }, 3000);
    }
    else if(form.values.email === "donor@guc.com" && form.values.password === "donor") {
      setRight(true);
      setWrong(false);
      setTimeout(() => {
        window.location.href = "/donor";
      }, 3000);
    }
    else if(form.values.email === "org@org.com" && form.values.password === "org123") {
      setRight(true);
      setWrong(false);
      setTimeout(() => {
        window.location.href = "/org";
      }, 3000);
    }
    else {
      setWrong(true);
      setRight(false);
      setTimeout(() => {
        setWrong(false);
      }, 2000);
    }
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
                      <p className="login-title">Login</p>
                      <Fade in={wrong} timeout={300}>
                        <div style={alertBox}>
                          <div style={textDanger}>Invalid Email or Password</div>
                        </div>
                      </Fade>
                    </div>

                    <form onSubmit={form.onSubmit(handleSubmit)}>

                      {right && (
                        <Alert variant="success"><b>Successfully Logged In Redirecting...</b><Spinner animation="border" size="sm" className="ms-2" /></Alert>
                      )}
                      <TextInput
                        radius="xl"
                        mt="sm"
                        size="lg"
                        label="Email"
                        placeholder="Email"
                        key={form.key('email')}
                        id="email"
                        {...form.getInputProps('email')}
                      />

                      <PasswordInput
                        mt="sm"
                        mb="md"
                        radius="xl"
                        size="lg"
                        label="Password"
                        placeholder="Password"
                        key={form.key('password')}
                        id="password"
                        {...form.getInputProps('password')}
                      />
                      <Button
                        size="lg"
                        className="btn text-uppercase"
                        type="submit"
                        variant="light"
                        style={{ width: "100%", padding: "10px" }}
                      >
                        Login
                      </Button>
                    </form>
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
