import React from 'react'
import { Button } from 'react-bootstrap';
import DeleteConfirmationModal from '../DeleteConfirmationModal';

const DonationPostEditDeleteForm = () => {
  return (
    <div>
      <Button>Edit Post</Button>
      <DeleteConfirmationModal/>
    </div>
  )
}

export default DonationPostEditDeleteForm;