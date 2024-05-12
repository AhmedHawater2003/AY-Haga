import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import AdminNotificationBrief from './AdminNotificationBrief';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Container>
                <Row>
                    <Col md={6}>
                        <RecentActivity />
                    </Col>
                    <Col md={6}>
                        <Users />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <AdminNotificationBrief />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

function RecentActivity() {
    const rows = [
        { id: 8, activity: 'Added new Request', date: '12/12/2021' },
        { id: 2, activity: 'Added new Request', date: '12/12/2021' },
        { id: 3, activity: 'Added new Request', date: '12/12/2021' },
        { id: 4, activity: 'Donated', date: '12/12/2021' },
        { id: 1, activity: 'Added new Request', date: '12/12/2021' }
    ];

    return (
        <div className="recent-activity">
            <h2 style={{color:"#0ca678"}}>Recent Activity</h2>
            <Table striped bordered hover className="custom-table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Activity</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index} >
                            <td style={{  backgroundColor: index % 2 === 0 ? 'rgba(18,184,134,0.5)' : 'rgba(18,184,134,0.9)',color: "#fffff9", fontWeight: 'bold', fontSize: '18px',WebkitTextStroke:"1px 1b5e39"}}>{row.id}</td>
                            <td style={{  backgroundColor: index % 2 === 0 ? 'rgba(18,184,134,0.5)' : 'rgba(18,184,134,0.9)',color: "#fffff9", fontWeight: 'bold', fontSize: '18px',WebkitTextStroke:"1px 1b5e39"}}>{row.activity}</td>
                            <td style={{  backgroundColor: index % 2 === 0 ? 'rgba(18,184,134,0.5)' : 'rgba(18,184,134,0.9)',color: "#fffff9", fontWeight: 'bold', fontSize: '18px',WebkitTextStroke:"1px 1b5e39"}}>{row.date}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

function Users() {
    const users = [
        { type: 'Donors', state: 'Active', number: 10230 },
        { type: 'Pro-Bono Volunteers', state: 'Active', number: 500 },
        { type: 'Donors', state: 'Pending', number: 101 },
        { type: 'Organizations', state: 'Active', number: 10 },
        { type: 'Organizations', state: 'Pending', number: 103 }
    ];

    return (
        <div className="users-container">
            <h2 style={{color:"#0ca678"}}>Users</h2>
            <Table striped bordered hover className="custom-table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>State</th>
                        <th>Number</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} style={{ }}>
                            <td style={{ backgroundColor: index % 2 === 0 ? 'rgba(18,184,134,0.5)' : 'rgba(18,184,134,0.9)', color: "#fffff9", fontWeight: 'bold', fontSize: '18px',WebkitTextStroke:"1px 1b5e39"}}>{user.type}</td>
                            <td style={{  backgroundColor: index % 2 === 0 ? 'rgba(18,184,134,0.5)' : 'rgba(18,184,134,0.9)',color: "#fffff9", fontWeight: 'bold', fontSize: '18px',WebkitTextStroke:"1px 1b5e39"}}>{user.state}</td>
                            <td style={{  backgroundColor: index % 2 === 0 ? 'rgba(18,184,134,0.5)' : 'rgba(18,184,134,0.9)',color: "#fffff9", fontWeight: 'bold', fontSize: '18px',WebkitTextStroke:"1px 1b5e39"}}>{user.number}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Dashboard;
