import React from 'react';
import { Button,ListGroup } from 'react-bootstrap';
import './DateDetails.css';
const URL = process.env.REACT_APP_APIURL

function DateDetails(props) { 
  const {title,date} = props
  function refreshPage() {
    window.location.reload(false);
  }
  function handleDelete(e){
    e.preventDefault();
    console.log(props)
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(props)
    }
    if(props){
      console.log(URL)
      fetch(URL + '/delete_important_day',options)
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
    <ListGroup.Item  className="DateEntry col-md-12">
        <div className="DateDetails">
            <h6>{title}</h6> 
            <p>{date}</p>
        </div>
        <div className="ButtonsGroup">
           <Button onClick={handleDelete} className="aBtn" variant="danger" size="sm">Delete</Button>
        </div>
    </ListGroup.Item>
    
  );
}

export default DateDetails;