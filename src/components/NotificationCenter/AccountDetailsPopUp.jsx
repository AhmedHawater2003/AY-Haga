import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const AccountDetailsPopUp = ({showAccount,back,close}) => {

    const handleBack = () =>{
        back();
      }
  return (
    <Modal show={showAccount} onHide={handleBack} size="lg" scrollable>
        <Modal.Header closeButton>
          <Modal.Title>AccountDetails</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            <h1> Nothing to see here</h1>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleBack}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default AccountDetailsPopUp