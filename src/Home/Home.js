import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import ChangePhoto from './ChangePhoto';
import ImportantDays from './ImportantDays';
import './Home.css';



function Home() { 
  return (
    <div className="Home ml-auto mr-auto col-md-12">
      <Jumbotron className="min-vh-100 jum">
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