import { Button } from "@mantine/core";
const DonationPostFulfilledForm = ({item , deletePost}) => {
  return (
    <div>
      <Button color ="red" onClick ={() => deletePost(item)}>Delete Post</Button>
    </div>
  )
}

export default DonationPostFulfilledForm;