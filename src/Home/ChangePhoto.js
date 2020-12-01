import React, {useState} from 'react'
import { Button,Modal,Form } from 'react-bootstrap';

function ChangePhoto() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>+</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Cover Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Upload cover photo" />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ChangePhoto