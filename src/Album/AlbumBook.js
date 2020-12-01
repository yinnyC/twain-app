import React from 'react';
import { Card } from 'react-bootstrap';
import './AlbumBook.css'
function AlbumBook() { 
  return (
    <div className="AlbumBook">
      <Card className="bg-dark text-white aBook shadow-sm ">
        <Card.Img src="https://media.newyorker.com/photos/5ec2d7a40fe2fbfb61a298c8/master/pass/Russell-NormalPeople-3.jpg" fluid/>
        <Card.ImgOverlay className="card-text">
          <div className="AlbumBook-Title">
            <Card.Title>30 Nov, 2020</Card.Title>
            
          </div>
          <div className="AlbumBook-Detail text-white-50">
            <Card.Text className="mb-0"> Hiking</Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </div>
          
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default AlbumBook;