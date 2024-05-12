import { Button, Text } from '@mantine/core';
import { Modal, Spinner } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { useState } from 'react';
import { Row } from 'react-bootstrap';


const DeleteConfirmationModal = ({item , deletePost,close ,back,hide,setShowDetails }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);};
  const handleBack = () => {setShow(false);};
  // const openDeleteModal = () => {hide();modals.openConfirmModal({
  //   title: 'Delete your profile',
  //   centered: true,
  //   children: (<Text size="sm">
  //     Are you sure you want to delete your profile? This action is destructive and you will have
  //     to contact support to restore your data.
  //   </Text>),
  //   labels: { confirm: 'Delete Post', cancel: "No don't delete it" },
  //   confirmProps: { color: 'red' },
  //   onCancel: () => {
  //     handleBack();
  //   },
  //   onConfirm: () => {
  //     deletePost(item);
  //     handleClose();
  //     // setShowDetails(false);
  //   }
// });};
  const [alertMessage , setAlertMessage] = useState('Deleting Post!  ');
  const [showAlert , setShowAlert] = useState(false);

  const handleDelete = () =>{
    deletePost(item) ; 
    setShowAlert(true);
    setTimeout(() => {
      setShow(false);
      setShowAlert(false);
    },20000);
    

  }
  return (
    // <MantineProvider>
    //   <ModalsProvider>
    //   <Button onClick={()=>{openDeleteModal();setShowDetails(false)}} color="red">Delete account</Button>
    //   </ModalsProvider>
    // </MantineProvider>
    // <div>
    //   <Button onClick={() => {setShow(true);setShowDetails(false);}}>Delete Post</Button>
    //   <Button onClick={openDeleteModal} color="red">Delete Post</Button>
    // </div>
    <>
    <Button style={{MozOutlineRadiusTopright : '15px'}} onClick={() => setShow(true)} color="red">Delete Post</Button>
    <Modal show={show} centered >
      <Modal.Header>
        <Modal.Title>Are you sure you want to delete this post?</Modal.Title>
        
      </Modal.Header>
      <Modal.Body>

      <Row>
        {showAlert&&<Alert style={{ textAlign: 'center'  }}  variant={'danger'}>
                {alertMessage}.  { <Spinner animation="border" size="sm" className="ms-2" />}
            </Alert>}
          </Row>
        <Text size="sm">
          Are you sure you want to delete this post? This action is destructive and you will have
          to contact support to restore your data.
        </Text>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShow(false)} color="gray">
          Cancel
        </Button>
        <Button onClick={handleDelete} color="red">
          Delete Post
        </Button>
      </Modal.Footer>
    </Modal>
    </>

  );
};

export default DeleteConfirmationModal;
