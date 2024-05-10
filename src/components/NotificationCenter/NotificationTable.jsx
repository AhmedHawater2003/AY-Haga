import React from "react";
import styled from "styled-components";
import { Badge, Button } from "react-bootstrap";
import NotificationDetails from "./NotificationDetails";

const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  font-size: 0.9rem;
`;

const NotificationTable = ({
  showNotificationDetails,
  back,
  close,
  notificationData,
  handleShow,
}) => {
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
            {notificationData.map((notification) => (
              <tr style={{ color: "red" }}>
                <td>
                  <Badge bg="warning" style={{ width: "100%", height: "100%" }}>
                    Mid
                  </Badge>
                </td>
                <td>
                  <div>
                    <span>{notification.title}</span>
                  </div>
                </td>
                <td>
                  <span>{notification.date}</span>
                </td>
                <td>
                  <span>{notification.user}</span>
                </td>
                <td>
                  <Button variant="primary" onClick={handleShow}>
                    View
                  </Button>
                  <NotificationDetails
                    key={notification.id}
                    notificationData={notification}
                    showNotificationDetails={showNotificationDetails}
                    back={back}
                    close={close}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </NotificationWrapper>
  );
};

export default NotificationTable;

{
  /*
dfghsdfg
            // <tr style={{color:"red"}}>
            //   <td>
            //     <Badge bg="warning" style={{width:"100%",height:"100%"}}>Mid</Badge>
            //   </td>
            //   <td>
            //     <div>
            //       <span>New donation request </span>
            //     </div>
            //   </td>
            //   <td>
            //     <span>2021-09-01</span>
            //   </td>
            //   <td>
            //     <span>Ahmed Aboelkhair</span>
            //   </td>
            //   <td>
            //     <Button >View</Button>
            //   </td>
            // </tr>
            // <tr >
            //   <td>
            //     <Badge bg="danger" style={{width:"100%",height:"100%"}}>High</Badge>
            //   </td>
            //   <td>
            //     <div>
            //       <span>New donation request!!</span>
            //     </div>
            //   </td>
            //   <td>
            //     <span>2021-09-01</span>
            //   </td>
            //   <td>
            //     <span>funky monkey</span>
            //   </td>
            //   <td>
            //     <Button >View</Button>
            //   </td>
            // </tr><tr >
            //   <td>
            //     <Badge bg="danger" style={{width:"100%",height:"100%"}}>High</Badge>
            //   </td>
            //   <td>
            //     <div>
            //       <span>terms updated</span>
            //     </div>
            //   </td>
            //   <td>
            //     <span>2021-09-01</span>
            //   </td>
            //   <td>
            //     <span>Admin</span>
            //   </td>
            //   <td>
            //     <Button >View</Button>
            //   </td>
            // </tr>
            // <tr >
            //   <td>
            //     <Badge bg="danger" style={{width:"100%",height:"100%"}}>High</Badge>
            //   </td>
            //   <td>
            //     <div>
            //       <span>baghhizzzzz</span>
            //     </div>
            //   </td>
            //   <td>
            //     <span>2021-09-01</span>
            //   </td>
            //   <td>
            //     <span>darkest ni**a</span>
            //   </td>
            //   <td>
            //     <NotificationDetails />
            //   </td>
            // </tr>
*/
}
