import React, {useState,useEffect} from 'react'
import { Button,Modal,Form,ListGroup } from 'react-bootstrap';
import './Home.css';
import DateDetails from './DateDetails';
import './ImportantDays.css';
// get fontawesome imports
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const URL = process.env.REACT_APP_APIURL

function ImportantDays(){
  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [date,setDate] = useState([])
  const getDates = ()=>{
    fetch(URL+'/get_Important_day')
    .then(response => {
      return response.json();
    }).then(date =>{
      setDate(date.data);
    }).catch(err=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    console.log("One lifecycle")
    getDates();
  }); 
  const dateList = date.map(({_id,title,date,timestamp})=>{
    
    return(
      <DateDetails 
      key={_id}
      _id = {_id}
      title={title}
      date={date}
      timestamp={timestamp}/>
    )
  })
  const [input,setInput] = useState({
    title:'',
    date:''
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
    if(input.title && input.date){
      fetch(URL + '/add_important_day',options)
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
          {dateList}
        </ListGroup>
        </Modal.Body>
        <Modal.Footer className="AddImportantDays">
          <Form className="ImportantDaysForm">
            <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control onChange={handleChange}  name="title" value={input.title} type="text"  />
            <Form.Label>Date</Form.Label>
            <Form.Control onChange={handleChange}  name="date" value={input.date} type="date"/>
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