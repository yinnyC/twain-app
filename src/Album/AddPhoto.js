import React, {useState} from 'react'
import { Button,Modal,Form } from 'react-bootstrap';
import './AddPhoto.css';
const URL = process.env.REACT_APP_APIURL

function AddPhoto() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const defaultImage = "https://media.newyorker.com/photos/5ec2d7a40fe2fbfb61a298c8/master/pass/Russell-NormalPeople-3.jpg"
  const [input,setInput] = useState({
    title:'',
    url:''
  })
  
  const isImageReady = input.url;
  let imagePreview;

  if(isImageReady){
    imagePreview = <img className="img-fluid" src={input.url} alt="preview" />
  }else{
    imagePreview = <img className="img-fluid" src={defaultImage} alt="preview" />
  }
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
    setShow(false)
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input)
    }
    if(input.title && input.url){
      console.log(input.url)
      fetch(URL + '/createPhoto',options)
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
    <div>
      <Button variant="secondary" className="AddButton" size="lg" onClick={handleShow}>+</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form action="" method="">
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control onChange={handleChange} name="title" value={input.title} type="text" placeholder="What's the story" />
          </Form.Group>
          <Form.Group>
          <Form.Label>Photo URL</Form.Label>
            <Form.Control onChange={handleChange}  name="url" value={input.url} type="text" placeholder="Paste your url" />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <div className="col-md-12 preview">
          {imagePreview}
          </div>
          
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default AddPhoto