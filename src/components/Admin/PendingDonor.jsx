import React, { useState } from 'react';
import './adminStyle.css';
import { Accordion, Alert, Col, Dropdown, Modal, Row } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar';
import { MdDownloadForOffline } from "react-icons/md";


const PendingDonor = ({ userData }) => {
    const [initialData, setInitialData] = useState(userData); // [userData, setUserData]
    const [show, setShow] = useState(false);
    const [acceptFlag, setAcceptFlag] = useState(false);
    const [rejectFlag, setRejectFlag] = useState(false);
    const [acceptedDonor, setAcceptedDonor] = useState("");
    const [rejectedDonor, setRejectedDonor] = useState("");
    const [resetFlag, setResetFlag] = useState(false);

    const handleAccept = (userId) => {
        setAcceptedDonor(initialData.find(user => user.id === userId).title);
        setInitialData(initialData.filter(user => user.id !== userId));
        setAcceptFlag(true);
        setTimeout(() => {
            setAcceptFlag(false);
        }
            , 3000);
    };

    const handleReject = (userId) => {
        setRejectedDonor(initialData.find(user => user.id === userId).title);
        setInitialData(initialData.filter(user => user.id !== userId));
        setRejectFlag(true);        
        setTimeout(() => {
            setRejectFlag(false);
        }
            , 3000);
    };

    const handleClose = () => {
        setShow(false);
    }

    const handleDownload = (userId) => {
        setShow(prevState => ({
            ...prevState,
            [userId]: true
        }));
    };

    const applyTypeFilter = (typeFilter) => {
        if (typeFilter === 'All') setInitialData(userData);
        else
            setInitialData(initialData.filter(user => user.donorType === typeFilter));
    }

    const applyAreaFilter = (areaFilter) => {
        if (areaFilter === 'All') setInitialData(userData);
        else
            setInitialData(initialData.filter(user => user.area === areaFilter));
    }

    const applyGovFilter = (govFilter) => {
        if (govFilter === 'All') setInitialData(userData);
        else
            setInitialData(initialData.filter(user => user.governorate === govFilter));
    }

    const searchResultsListStyle = {
        width: "30%",
        backgroundColor: "#fffffc",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        maxHeight: "300px",
        overflowY: "auto",
        position: "absolute",
        zIndex: "1000",
        top: "17rem",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
    }

    const titleStyling = {
        color: "#1b5e39",
        fontWeight: "bold",
        fontSize: "25px",
    }
    const textStyling = {
        color: "#1b5e39",
        fontSize: "15px",
    }

    return (
        <div className="user-webpage-table-container">
            <div className="user-cards-container">
                <h1 style={{ color: "#1b5e39", marginBottom: "20px" }}>Pending Pro-bono Requests</h1>
                <div style={{marginBottom:"10px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Filter by Type
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => applyTypeFilter('All')}>All</Dropdown.Item>
                            {initialData.map((user)=>(
                                <Dropdown.Item key={user.id} onClick={() => applyTypeFilter(user.donorType)}>{user.donorType}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Filter by Area
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => applyAreaFilter('All')}>All</Dropdown.Item>
                            {initialData.map((user)=>(
                                <Dropdown.Item key={user.id} onClick={() => applyAreaFilter(user.area)}>{user.area}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Filter by Governorate
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => applyGovFilter('All')}>All</Dropdown.Item>
                            {initialData.map((user)=>(
                                <Dropdown.Item key={user.id} onClick={() => applyGovFilter(user.governorate)}>{user.governorate}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <SearchBar inputStyle={{
                            width: "30vw",
                            height: "40px",
                            padding: "10px 10px",
                        }}
                            buttonStyle={{
                                fontSize: "20px",
                                padding: "4px",
                                width: "80px",
                                height: "40px",
                            }} 
                            searchResultsListStyle={searchResultsListStyle}
                            searchResultsData={initialData} onSearchResultSelection={(resultData) => { setInitialData([resultData]); setResetFlag(true); }} resultLabellKey="title" />
                            {resetFlag && <button className="btn"onClick={(e) => {
                                e.preventDefault();
                                setInitialData(userData);
                                setResetFlag(false);
                            }
                            }>Reset Search</button>}
                </div>
                {acceptFlag && <Alert variant="success" style={{ textAlign: "center" }}>Accepted {acceptedDonor}'s Request</Alert>}
                {rejectFlag && <Alert variant="danger" style={{ textAlign: "center" }}>Rejected {rejectedDonor}'s Request</Alert>}
                {initialData.map((user) => (
                    <Accordion key={user.id} className='user-card'>
                        <Accordion.Item eventKey={user.id}>
                            <Accordion.Header className='admin'>
                                <Row>
                                    <Col>
                                        <h5 style={titleStyling}>{user.title}</h5>
                                        <p>Type: {user.donorType}</p>
                                    </Col>
                                </Row>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Col>
                                        <h5 style={titleStyling}> Donor Information:</h5>
                                        <h6 style={textStyling}>Name: {user.firstName} {user.lastName}</h6>
                                        <h6 style={textStyling}>Gender: {user.gender}</h6>
                                        <h6 style={textStyling}>Email: {user.email}</h6>
                                        <h6 style={textStyling}>Contact Number: {user.contactNumber}</h6>
                                    </Col>
                                    <Col>
                                        <h5 style={titleStyling}>Location:</h5>
                                        <h6 style={textStyling}>Address: {user.address}</h6>
                                        <h6 style={textStyling}>Area: {user.area}</h6>
                                        <h6 style={textStyling}>Governorate: {user.governorate}</h6>
                                        <h6 style={textStyling}>Type: {user.donorType}</h6>
                                    </Col>
                                    <Col>
                                        <h6 style={titleStyling}>Additional Information:</h6>
                                        {user.donorType === "Pro Bono Doctor" ? (
                                            <>
                                            <h5 style={textStyling}>Specialization: {user.specialization}</h5>
                                            <h5 style={textStyling}>Pro Bono Cases: {user.probonoCases}</h5>
                                            </>
                                        ) : (
                                            <>
                                            <h5 style={textStyling}>Subjects: {user.subjectsTeach}</h5>
                                            <h5 style={textStyling}>Pro Bono Classes: {user.proBonoClasses}</h5>
                                            </>
                                        )}
                                    </Col>
                                    <Col>
                                        <button className="admin btn-accept" onClick={() => handleAccept(user.id)}>Accept</button>
                                        <button className="admin btn-reject" onClick={() => handleReject(user.id)}>Reject</button>
                                        <button className="admin btn-download" onClick={() => handleDownload(user.id)}><MdDownloadForOffline />Download</button>
                                    </Col>
                                </Row>
                                {user.donorType === "Pro Bono Doctor" && (
                                    <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", margin:"20px", textAlign:"center" }}>
                                    <h5 style={titleStyling}>Location:</h5>
                                    <iframe loading='lazy' width="100%" height="350" src={user.mapLocation} style={{ border: "2px solid #1b5e39", width: "50%", borderRadius: "20px", }}></iframe>
                                </Row>
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Modal show={show[user.id]} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Documents</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <iframe zoom="70" src={user.pdfUrl} title="PDF" width="100%" height="600px"></iframe>
                            </Modal.Body>
                        </Modal>
                    </Accordion>
                ))}
            </div>
        </div>
    );
};

export default PendingDonor;