import React, { useState } from 'react';
import './styles.css';
import { Accordion, Col, Dropdown, Row } from 'react-bootstrap';
import GoogleLocator from '../GoogleLocator.jsx';
const AdminList = () => {
    const [users,setUsers] = useState([
        {
            id: 1,
            orgName: "Organization 1",
            orgArea: "Area 1",
            orgGov: "Governorate 1",
            orgType: "Type 1",
            orgAddress: "Address 1",
            repFirstName: "First Name 1",
            repLastName: "Last Name 1",
            repGender: "Male",
            repPhone: "Phone 1",
            repEmail: "Email 1",
            pdfUrl: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
        },
        {
            id: 2,
            orgName: "Organization 2",
            orgArea: "Area 2",
            orgGov: "Governorate 2",
            orgType: "Type 2",
            orgAddress: "Address 2",
            repFirstName: "First Name 2",
            repLastName: "Last Name 2",
            repGender: "Female",
            repPhone: "Phone 2",
            repEmail: "Email 2",
            pdfUrl: "../assets/Lec1.pdf",
        },

    ]);

    const handleAccept = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    const handleReject = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    const handleDownload = (pdfUrl) => {
        const fileUrl = pdfUrl; // URL of the PDF

        // Create a link element
        const downloadLink = document.createElement('a');
        downloadLink.href = fileUrl;
        downloadLink.target = '_blank';
        downloadLink.setAttribute('download', 'download');

        // Trigger the download in new tab
        document.body.appendChild(downloadLink);
        downloadLink.click();
    };

    return (
        <div className="user-webpage-table-container">
            <div className='user-cards-container'>
                {users.map(user => (
                    <Accordion style={{ width: "80%", margin: "20px" }} key={user.id}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <Row>
                                    <Col>
                                        <h5>{user.orgName}</h5>
                                        <p>{user.orgType}</p>
                                    </Col>
                                </Row>
                            </Accordion.Header>
                            <Accordion.Body >
                                <Row>
                                    <Col>
                                        <h5>Organization Details:</h5>
                                        <h6>{user.orgAddress}</h6>
                                        <h6>{user.orgArea}</h6>
                                        <h6>{user.orgGov}</h6>
                                    </Col>
                                    <Col>
                                        <h5>Representative Details:</h5>
                                        <h6>{user.repFirstName} {user.repLastName}</h6>
                                        <h6>{user.repGender}</h6>
                                        <h6>{user.repPhone}</h6>
                                        <h6>{user.repEmail}</h6>
                                    </Col>
                                    <Col>
                                        <button style={{ margin: "10px" }} className="btn btn-success" onClick={() => handleAccept(user.id)}>Accept</button>
                                        <button style={{ margin: "10px" }} className="btn btn-danger" onClick={() => handleReject(user.id)}>Reject</button>
                                        <button style={{ margin: "10px" }} className="btn btn-primary" onClick={() => handleDownload(user.pdfUrl)}>Download Documents</button>
                                    </Col>


                                </Row>
                                <Row style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                                <iframe loading='lazy' width="300" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=31.246613860130314%2C30.110902305161233%2C31.250063180923465%2C30.112575199135026&amp;layer=mapnik&amp;marker=30.111737595568414%2C31.248338520526886" style={{border: "2px solid #1b5e39", width:"50%", borderRadius:"20px",}}></iframe>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}

export default AdminList;