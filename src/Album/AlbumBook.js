import React from 'react';
import { Card } from 'react-bootstrap';
import './AlbumBook.css'
function AlbumBook(props) { 
  const {title,url,date} = props
  return (
    <div className="AlbumBook">
      <Card className="bg-dark text-white aBook shadow-sm ">
        <img className="imgCard" src={url} alt={title}/>
        <Card.ImgOverlay className="card-text">
          <div className="AlbumBook-Title">
            <Card.Title>{date}</Card.Title> 
          </div>
          <div className="AlbumBook-Detail text-white-50">
            <Card.Text className="mb-0"> {title}</Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default AlbumBook;