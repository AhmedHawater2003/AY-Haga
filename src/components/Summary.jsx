import teamPhoto from '../assets/logo_no_bg.png';
import { useState, useEffect } from 'react';
const Summary = () => {

    return (
        <div className="who-container">
            <div className="image-container">
                <img src={teamPhoto} alt="Team" className="team-photo" />
            </div>
            <div className="text-container">
                <h2 className="who-title">Who Are We</h2>
                <p className="who-description">
                    We are a team of dedicated individuals committed to making a positive impact in society through technology. Our mission is to build a non-monetary donation application for NGOs (non-government organizations) that facilitates communication between donors and those in need.
                    <br /><br />
                    Our application aims to bridge the gap between donors and recipients, enabling the donation of essential items such as clothes, medical supplies, school supplies, furniture, toys, and more to those who require them the most. With our expertise and passion for social good, we strive to create a platform that brings communities together and fosters a culture of giving and support.
                </p>
            </div>
        </div>
    );
}

export default Summary;