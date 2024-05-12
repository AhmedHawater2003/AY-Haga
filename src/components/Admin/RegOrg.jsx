import React, { useState } from 'react';
import './adminStyle.css';
import { Accordion, Alert, Col, Dropdown, Modal, Row } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar';
import { MdDownloadForOffline } from "react-icons/md";

const RegOrg = ({ userData }) => {
    
        const [initialData, setInitialData] = useState(userData); // [userData, setUserData]
        const [show, setShow] = useState(false);
        const [deleteFlag, setDeleteFlag] = useState(false);
        const [deletedOrg, setDeletedOrg] = useState("");
        const [resetFlag, setResetFlag] = useState(false);

        const handleDelete = (userId) => {
            setInitialData(initialData.filter(user => user.id !== userId));
            setDeleteFlag(true);
            setDeletedOrg(initialData.find(user => user.id === userId).orgName);
            setTimeout(() => {
                setDeleteFlag(false);
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
            setInitialData(initialData.filter(user => user.orgType === typeFilter));
        };

        const applyAreaFilter = (areaFilter) => {
            if (areaFilter === 'All') setInitialData(userData);
            else
            setInitialData(initialData.filter(user => user.orgArea === areaFilter));
        };

        const applyGovFilter = (govFilter) => {
            if (govFilter === 'All') setInitialData(userData);
            else
            setInitialData(initialData.filter(user => user.orgGov === govFilter));
        };

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
            boxShadow: "0px 0px 10px 0px #1b5e39",
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
                <h1 style={{ color: "#1b5e39", marginBottom: "20px" }}>Registered Organizations</h1>
                <div style={{marginBottom:"10px" ,display: "flex",flexWrap:"wrap", justifyContent: "center", alignItems: "center", gap:"20px"}}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Filter by Type
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => applyTypeFilter('All')}>All</Dropdown.Item>
                            {initialData.map((user) => (
                                <Dropdown.Item key={user.id} onClick={() => applyTypeFilter(user.orgType)}>{user.orgType}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Filter by Area
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => applyAreaFilter('All')}>All</Dropdown.Item>
                            {initialData.map((user) => (
                                <Dropdown.Item key={user.id} onClick={() => applyAreaFilter(user.orgArea)}>{user.orgArea}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Filter by Government
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => applyGovFilter('All')}>All</Dropdown.Item>
                            {initialData.map((user) => (
                                <Dropdown.Item key={user.id} onClick={() => applyGovFilter(user.orgGov)}>{user.orgGov}</Dropdown.Item>
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
                            searchResultsData={initialData} onSearchResultSelection={(resultData) => { setInitialData([resultData]); setResetFlag(true); }} resultLabellKey="orgName" />
                            {resetFlag && <button className="btn"onClick={(e) => {
                                e.preventDefault();
                                setInitialData(userData);
                                setResetFlag(false);
                            }
                            }>Reset Search</button>}
                </div>
                {deleteFlag && <Alert variant="danger" style={{margin:"10px", fontWeight: "bold"}}>Organization {deletedOrg} has been deleted successfully</Alert>}
                {initialData.map((user) => (
                    <Accordion className='user-card' key={user.id}>
                        <Accordion.Item eventKey={user.id}>
                            <Accordion.Header className='admin'>
                                <Row>
                                    <Col>
                                        <h5 style={titleStyling}>Organization Name: {user.orgName}</h5>
                                        <p>Type: {user.orgType}</p>
                                    </Col>
                                </Row>
                            </Accordion.Header>
                            <Accordion.Body >
                                <Row>
                                    <Col>
                                        <h5 style={titleStyling}>Organization Details:</h5>
                                        <h6 style={textStyling}>Address: {user.orgAddress}</h6>
                                        <h6 style={textStyling}>Area: {user.orgArea}</h6>
                                        <h6 style={textStyling}>Governorate: {user.orgGov}</h6>
                                    </Col>
                                    <Col>
                                        <h5 style={titleStyling}>Representative Details:</h5>
                                        <h6 style={textStyling}>Name: {user.repFirstName} {user.repLastName}</h6>
                                        <h6 style={textStyling}>Gender: {user.repGender}</h6>
                                        <h6 style={textStyling}>Phone: {user.repPhone}</h6>
                                        <h6 style={textStyling}>Email: {user.repEmail}</h6>
                                    </Col>
                                    <Col>
                                        <button className="admin btn-reject" onClick={() => handleDelete(user.id)}>Delete</button>
                                        <button className="admin btn-download" onClick={() => handleDownload(user.id)}><MdDownloadForOffline/> Documents</button>
                                    </Col>
                                </Row>
                                <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", margin:"20px", textAlign:"center" }}>
                                    <h5 style={titleStyling}>Location:</h5>
                                    <iframe loading='lazy' width="100%" height="350" src={user.mapLocation} style={{ border: "2px solid #1b5e39", width: "50%", borderRadius: "20px", }}></iframe>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Modal show={show[user.id]} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{user.orgName}Documents</Modal.Title>
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

export default RegOrg;
