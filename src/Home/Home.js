import React,{useState,useEffect} from 'react';
import { Jumbotron } from 'react-bootstrap';
import ChangePhoto from './ChangePhoto';
import ImportantDays from './ImportantDays';
import './Home.css';
const URL = process.env.REACT_APP_APIURL


function Home() { 
  const [cover,setCover] = useState([])
  const getCover = ()=>{
    fetch(URL+'/api/getCover')
    .then(response => {
      return response.json();
    }).then(cover =>{
      console.log(cover);
      setCover(cover.data);
    }).catch(err=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getCover();
  },[]) 
  return (
    <div className="Home ml-auto mr-auto col-md-12">
      <Jumbotron className="min-vh-100 jum"  style={{backgroundImage: `url(${cover.url}` }}>
        <div className="anniversary">
        <h2>Our First Day</h2>
        <p>486 days since</p>
        </div>
        <div className="buttons">
        <ChangePhoto />
        <ImportantDays/>
      </div>
    </Jumbotron>
    
    </div>
  );
}

export default Home;