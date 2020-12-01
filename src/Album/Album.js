import React from 'react';
import AlbumBook from './AlbumBook'
import CardGroup from 'react-bootstrap/CardGroup'
import AddPhoto from './AddPhoto'
import './Album.css'
function Album() { 
  return (
    <div className="Album">
      <div className="Add-button">
        <AddPhoto />
      </div>
      <div className="countainer">
        <CardGroup className="AlbumBooks">
          <AlbumBook />
          <AlbumBook />
          <AlbumBook />
          <AlbumBook />
          <AlbumBook />
          <AlbumBook />
          <AlbumBook />
          <AlbumBook />
          <AlbumBook />
        </CardGroup>
      </div>
    </div>
  );
}

export default Album;