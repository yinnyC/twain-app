import React, {useEffect,useState} from 'react';
import AlbumBook from './AlbumBook'
import CardGroup from 'react-bootstrap/CardGroup'
import AddPhoto from './AddPhoto'
// import data from '../Album-data.json'
import './Album.css'
const URL = process.env.REACT_APP_APIURL

function Album() {
  const [photos,setPhotos] = useState([])
  const getPhotos = ()=>{
    fetch(URL+'/getAlbum')
    .then(response => {
      return response.json();
    }).then(photos =>{
      setPhotos(photos.data);
    }).catch(err=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getPhotos();
  },[]) 
  const albumbooks = photos.map(({_id,title,url,timestamp})=>{
    
    return(
      <AlbumBook 
      key={_id}
      title={title}
      url={url}
      timestamp={timestamp}/>
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