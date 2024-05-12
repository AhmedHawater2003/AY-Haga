import React from "react";
import { Button } from "react-bootstrap";

const DonationPostEditDeleteForm = () => {
  return (
    <div>
      <Button>Edit Post</Button>
      <DeleteConfirmationModal />
    </div>
  );
};

export default DonationPostEditDeleteForm;
