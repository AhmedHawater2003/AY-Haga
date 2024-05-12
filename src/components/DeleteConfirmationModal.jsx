import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

const DeleteConfirmationModal = ({item , deletePost,close ,back,hide }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);};
  const handleBack = () => {setShow(false);};
  const openDeleteModal = () => {hide();modals.openConfirmModal({
    title: 'Delete your profile',
    centered: true,
    children: (<Text size="sm">
      Are you sure you want to delete your profile? This action is destructive and you will have
      to contact support to restore your data.
    </Text>),
    labels: { confirm: 'Delete account', cancel: "No don't delete it" },
    confirmProps: { color: 'red' },
    onCancel: () => {
      handleBack();
    },
    onConfirm: () => {
      deletePost(item);
      handleClose();
    }
});};
  return (
    <MantineProvider>
      <ModalsProvider>
      <Button onClick={()=>{openDeleteModal();}} color="red">Delete account</Button>
      </ModalsProvider>
    </MantineProvider>

  );
};

export default DeleteConfirmationModal;
