import React, {useState} from 'react'
import { Button,Modal,Form } from 'react-bootstrap';
import './Home.css';
// get fontawesome imports
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const URL = process.env.REACT_APP_APIURL

function ChangePhoto() {
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
  function refreshPage() {
    window.location.reload(false);
  }
  function handleClick(e){
    setShow(false)
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
      fetch(URL + '/api/updateCover',options)
      .then(response =>{
        return response.json()
      }).catch(err=>{
        console.log(err)
      })
      refreshPage()
    }else{
      console.log("The form is not valid to be sent")
    }
  }

  return (
    <>
      <Button variant="secondary" className="AddButton" size="lg" onClick={handleShow}><FontAwesomeIcon icon={faImage} /></Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Cover Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group>
          <Form.Control onChange={handleChange}  name="url" value={input.url} type="text" placeholder="Paste your url" />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="Btn" variant="primary" onClick={handleClick}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ChangePhoto;