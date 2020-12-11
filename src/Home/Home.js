import React,{useState,useEffect} from 'react';
import { Jumbotron } from 'react-bootstrap';
import ChangePhoto from './ChangePhoto';
import ImportantDays from './ImportantDays';
import './Home.css';
import moment from 'moment';
const URL = process.env.REACT_APP_APIURL


function Home() { 
  const [anniversary,setAnniversary] = useState([])
  const get_anniversary = ()=>{
    fetch(URL+'/get_anniversary')
    .then(response => {
      return response.json();
    }).then(anniversary =>{
      console.log(anniversary);
      setAnniversary(anniversary.data);
    }).catch(err=>{
      console.log(err)
    })
  }
  const [cover,setCover] = useState([])
  const getCover = ()=>{
    fetch(URL+'/getCover')
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
    get_anniversary();
  },[]) 
  return (
    <div className="Home ml-auto mr-auto col-md-12">
      <Jumbotron className="min-vh-100 jum"  style={{backgroundImage: `url(${cover.url}` }}>
        <div className="anniversary">
        <h2>Our First Day</h2>
        <p>{moment().diff(moment.unix(anniversary.timestamp), 'days') } days since</p>
        
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