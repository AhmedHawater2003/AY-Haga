import { useState } from "react";
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

const DeleteConfirmationModal = ({item , deletePost,close ,back }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const openDeleteModal = () => modals.openConfirmModal({
    title: 'Delete your profile',
    centered: true,
    children: (<Text size="sm">
      Are you sure you want to delete your profile? This action is destructive and you will have
      to contact support to restore your data.
    </Text>),
    labels: { confirm: 'Delete account', cancel: "No don't delete it" },
    confirmProps: { color: 'red' },
    onCancel: () => {
      back();
      handleClose();
    },
    onConfirm: () => {
      deletePost(item);
      close();
      handleClose();
    }
});
  return (
    <Button onClick={() => deletePost(item)} color="red">Delete account</Button>
  );
};

export default DeleteConfirmationModal;
