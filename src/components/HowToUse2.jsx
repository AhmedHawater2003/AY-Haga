import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../HowToUse.css';
import { SlArrowLeftCircle } from "react-icons/sl";

const HowToUse = () => {
    return (
        <div style={{textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <a className="login-link" href="/">
                    <p className="login-text2">
                      <SlArrowLeftCircle />
                      Back To Home
                    </p>
                  </a>
            <h1 style={{color:"#0ca678"}}>How to Use</h1>
        <div className="how-to-use">
            <div className="who-container" style={{width:"40%", height:"60%"}}>
                <div className="text-container">
                    <p className="who-description">
                        <h3>For Organization Representatives:</h3>
                        <ol>
                            <li>Register your organization by providing accurate details and uploading verification documents.</li>
                            <li>Create donation posts to communicate your organization's needs and initiatives.</li>
                            <li>Receive notifications when your donation posts are chosen by donors.</li>
                            <li>Coordinate donation pickups and ensure the smooth transfer of donated items.</li>
                            <li>View details of fulfilled donation posts and acknowledge donor contributions.</li>
                            <li>Delete fulfilled donation posts to keep your profile organized.</li>
                            <li>Update your account information and preferences as needed.</li>
                            {/* Include any additional instructions */}
                        </ol>
                    </p>
                </div>
            </div>
            <div className="who-container" style={{width:"40%", height:"60%"}}>
                <div className="text-container">
                    <p className="who-description">
                        <h3>For Donors:</h3>
                        <ol>
                            <li>Register as a donor by providing your personal details and preferences.</li>
                            <li>For Pro-bono volunteers you can upload you verification documents</li>
                            <li>Browse through donation requests to identify causes aligned with your interests and values.</li>
                            <li>Select items to donate and schedule pickup or drop-off</li>
                            <li>Monitor the progress of your donation and receive notifications for driver arrivals.</li>
                            <li>View details of fulfilled donation posts and the impact of your contributions.</li>
                            <li>Update your account information and preferences as needed.</li>
                            {/* Include any additional instructions */}
                        </ol>
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HowToUse;
