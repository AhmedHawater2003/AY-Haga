import { Button } from "@mantine/core";
import { useState } from "react";
import DeleteConfirmationModal from "../DeleteConfirmationModal";

const DonationPostFulfilledForm = ({item , deletePost}) => {
  const back1 = ()=>{
    setShow(true);
  }
  const hide = ()=>{
    setShow(false);
  }
  return (
    <div>
      <DeleteConfirmationModal
          item={item}
          deletePost={deletePost}
          back={back1}
          hide={hide} 
        />
      {/* <Button color ="red" onClick ={() => deletePost(item)}>Delete Post</Button> */}
    </div>
  )
}

export default DonationPostFulfilledForm;