import React, { useState } from 'react';
import logo from '../assets/logo_no_bg.png';
import bg from '../assets/login_bg.jpg';
import { FiEyeOff, FiEye } from 'react-icons/fi'; // Import eye and eyeOff icons from react-icons/fi
import { SlArrowLeftCircle } from "react-icons/sl";
import { Alert } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(<FiEyeOff className='icon' />); // Initialize icon state with FiEyeOff icon
    const [showAlert, setShowAlert] = useState(false);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(<FiEye className='icon' />); // Change icon to FiEye when showing password
            setType('text');
        } else {
            setIcon(<FiEyeOff className='icon' />); // Change icon to FiEyeOff when hiding password
            setType('password');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "marina.nader" && password === "WeLoveMarinaNader") {
            window.location.href = "/admin";
        }
        else {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
    }

    return (
        <div className="maincontainer">
            <div className="container-fluid" style={{ margin: "200px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.9)", borderRadius: "20px" }}>
                <div className="row no-gutter">

                    <div className="col p-0">
                        <div className="login d-flex align-items-center" style={{ height: "100%" }}>
                            <div className="container" style={{ height: "100%" }}>
                                <div className="row form">
                                    <a className='login-link' href="/">
                                        <p className="login-text2"><SlArrowLeftCircle />Back To Home</p>
                                    </a>
                                    <div className="col-lg-10 col-xl-7 mx-auto">
                                        <div className='login-logo-container'>
                                            <img className="login-logo" src={logo} alt="" />
                                        </div>
                                        <p className="login-title">Login</p>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group mb-3">
                                                <input id="inputEmail" type="text" placeholder="Username" required autoFocus className="input-field" onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className="form-group mb-3">
                                                <div className="password-container">
                                                    <input id="inputPassword" type={type} placeholder="Password" required className="input-field" onChange={(e) => setPassword(e.target.value)} />
                                                    <span className="show-pass-span" onClick={handleToggle}>
                                                        {icon}
                                                    </span>
                                                </div>
                                            </div>
                                            <button type="submit" className="login-btn text-uppercase">Sign in</button>
                                            {showAlert && (
                                                    <div className='login-text'>Please check your email and password and try again.</div>  
                                            )}
                                            <div className="text-center mt-4">
                                                <div className="login-text">Doesn't Have An Account?</div>
                                                <a href="#">
                                                    <button className="btn text-uppercase" style={{ marginBottom: "10px" }}>Register</button>
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col p-0">
                        <img src={bg} alt="" className='login-bg' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
