import React, {useState} from 'react'
import { Button,Modal,Form } from 'react-bootstrap';

function AddPhoto() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>+</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group controlId="Album.title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="What's the story" />
          </Form.Group>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Upload your photo" />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default AddPhoto