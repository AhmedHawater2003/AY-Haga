import React from "react";
import styled from "styled-components";
import {  Button } from '@mantine/core';
import { Badge } from '@mantine/core';

const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  font-size: 0.9rem;
`;

const NotificationTable = ({
  notificationData,
  handleShowRequest,
  handleShowAnnounce,
}) => {
  return (
    <NotificationWrapper>
      <div className="table-wrap">
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
              <tr key={notification.id}>
                <td>
                  <Badge variant="light" color={notification.color}>{notification.priority}</Badge>
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
                  <Button
                  variant="filled" color="teal"
                    onClick={
                      notification.type == "request"
                        ? handleShowRequest
                        : handleShowAnnounce
                    }
                  >
                    View
                  </Button>
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
