import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import AccountBriefDetails from '../OrgAccountBrief'

const AccountDetailsPopUp = ({showAccount,back}) => {

    const handleBack = () =>{
        back();
      }
  return (
    <Modal show={showAccount} onHide={handleBack} size="lg" scrollable>
        <Modal.Header closeButton>
          <Modal.Title>AccountDetails</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            <AccountBriefDetails />
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleBack}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default AccountDetailsPopUp;