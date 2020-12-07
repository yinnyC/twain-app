import React from 'react';
import AlbumBook from './AlbumBook'
import CardGroup from 'react-bootstrap/CardGroup'
import AddPhoto from './AddPhoto'
import data from '../Album-data.json'
import './Album.css'

function Album() { 
  const albumbooks = data.map(({title,url,date})=>{
    return(
      <AlbumBook 
      key={title}
      title={title}
      url={url}
      date={date}/>
    )
  })
  return (
    <div className="Album">
      <div className="col-md-11 mr-auto ml-auto">
        <div className="Add-button">
          <p className="Greeting">What's the advanture of today?</p>
          <AddPhoto />
        </div>
        <CardGroup className="AlbumBooks">
          { albumbooks }
        </CardGroup>
      </div>
    </div>
  );
}

export default Album;