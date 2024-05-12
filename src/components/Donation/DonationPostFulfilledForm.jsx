import React from 'react'
import { Button } from 'react-bootstrap';
import DonatinonOrganizationInfo from './DonatinonOrganizationInfo';

const DonationPostFulfilledForm = ({item , deletePost}) => {
  return (
    <div>
      <h4>Donor Details</h4>
      <DonatinonOrganizationInfo
              organizationDetails
            />
      <Button onClick ={() => deletePost(item)}>Delete Post</Button>
    </div>
  )
}

export default DonationPostFulfilledForm;