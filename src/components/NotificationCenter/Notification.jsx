import { Badge, Card, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import NotificationDetails from "./NotificationDetails";

const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  font-size: 0.9rem;
`;
const NotificationCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  font-size: 0.9rem;
`;

const viewNotificationButton = styled.button`
  background-color: green;
  color: white;
  border-radius: 5px;
  `;

const notificationCardStyle = {
  width: "100%",
  backgroundColor: "whitesmoke",
  marginBottom: "0.5rem",
  borderRadius: "10px",
};

const viewButtonStyle = {
  backgroundColor: "green",
  color: "white",
  borderRadius: "5px",
  height:"2rem",
  
};

const handleBack = () => {
  back();
}

const Notification = ({showNotificationDetails,back}) => {
  return (
    <NotificationWrapper>
      <div class="table-wrap">
        <table className="table">
          <thead className="thead-primary">
            <tr>
              <th>Importance</th>
              <th>Title</th>
              <th>Date</th>
              <th>From</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{color:"red"}}>
              <td>
                <Badge bg="warning" style={{width:"100%",height:"100%"}}>Mid</Badge>
              </td>
              <td>
                <div>
                  <span>New donation request </span>
                </div>
              </td>
              <td>
                <span>2021-09-01</span>
              </td>
              <td>
                <span>Ahmed Aboelkhair</span>
              </td>
              <td>
                <Button >View</Button>
              </td>
            </tr>
            <tr >
              <td>
                <Badge bg="danger" style={{width:"100%",height:"100%"}}>High</Badge>
              </td>
              <td>
                <div>
                  <span>New donation request!!</span>
                </div>
              </td>
              <td>
                <span>2021-09-01</span>
              </td>
              <td>
                <span>funky monkey</span>
              </td>
              <td>
                <Button >View</Button>
              </td>
            </tr><tr >
              <td>
                <Badge bg="danger" style={{width:"100%",height:"100%"}}>High</Badge>
              </td>
              <td>
                <div>
                  <span>terms updated</span>
                </div>
              </td>
              <td>
                <span>2021-09-01</span>
              </td>
              <td>
                <span>Admin</span>
              </td>
              <td>
                <Button >View</Button>
              </td>
            </tr>
            <tr >
              <td>
                <Badge bg="danger" style={{width:"100%",height:"100%"}}>High</Badge>
              </td>
              <td>
                <div>
                  <span>baghhizzzzz</span>
                </div>
              </td>
              <td>
                <span>2021-09-01</span>
              </td>
              <td>
                <span>darkest ni**a</span>
              </td>
              <td>
                <NotificationDetails />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </NotificationWrapper>
  );
};

export default Notification;
