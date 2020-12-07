import React, {useState} from 'react'
import { Button,Modal,Form } from 'react-bootstrap';


function AddCard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="AddButton" size="lg" variant="secondary" onClick={handleShow}>+</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group controlId="Plan.title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter your plan" />
          </Form.Group>
          <Form.Group controlId="Plan.category">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select">
              <option>Career</option>
              <option>Travel</option>
              <option>Shopping</option>
              <option>Goal</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Plan.Description">
            <Form.Label>Set Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group controlId="Plan.Description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
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


export default AddCard