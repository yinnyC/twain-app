import React, {useState} from 'react'
import { Button,Modal,Form,ListGroup } from 'react-bootstrap';
import './Home.css';
import './ImportantDays.css'
// get fontawesome imports
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const URL = process.env.REACT_APP_APIURL

function ImportantDays(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [input,setInput] = useState({
    url:''
  })
  function handleChange(e){
    const {name,value} = e.target;

    setInput(prevInput =>{
      return {
        ...prevInput,
        [name]: value
      }
    })
  }
  function handleClick(e){
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input)
    }
    if(input.url){
      console.log(input.url)
      fetch(URL + '/updateCover',options)
      .then(response =>{
        return response.json()
      }).catch(err=>{
        console.log(err)
      })
    }else{
      console.log("The form is not valid to be sent")
    }
  }

  return (
    <>
      <Button variant="secondary" className="AddButton" size="lg" onClick={handleShow}><FontAwesomeIcon icon={faCalendar} /></Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Important Days</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup variant="flush">
          <ListGroup.Item><h6>Our First Day</h6> <p>02 Aug, 2019</p></ListGroup.Item>
          <ListGroup.Item><h6>Jane's Bday</h6> <p>02 Oct, 1995</p></ListGroup.Item>
          <ListGroup.Item><h6>John's Bday</h6> <p>02 Oct, 1992</p></ListGroup.Item>
        </ListGroup>
        </Modal.Body>
        <Modal.Footer className="AddImportantDays">
          <Form className="ImportantDaysForm">
            <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control onChange={handleChange}  name="title" value={input.url} type="text"  />
            <Form.Label>Date</Form.Label>
            <Form.Control onChange={handleChange}  name="date" value={input.url} type="date"/>
            </Form.Group>
          </Form>
          <div className="Buttons">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="aBtn" variant="primary" onClick={handleClick}>
            Confirm
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ImportantDays;