import React from 'react'
import { Button } from 'react-bootstrap';
import DonatinonOrganizationInfo from './DonatinonOrganizationInfo';

const DonationPostFulfilledForm = () => {
  return (
    <div>
      <h4>Doner Details</h4>
      <DonatinonOrganizationInfo
              organizationDetails
            />
      <Button>Delete Post</Button>
    </div>
  )
}

export default DonationPostFulfilledForm;