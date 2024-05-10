import React from "react";
import styled from "styled-components";
import { Badge, Button } from "react-bootstrap";
import NotificationPopUp from "./NotificationPopUp";

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
                  <NotificationPopUp close={close} back={back}/>
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
