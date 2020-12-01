import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import ChangePhoto from './ChangePhoto';
import './Home.css';
function Home() { 
  return (
    <div className="Home">
      <Jumbotron className="min-vh-100 jum">
        <div className="anniversary">
        <h1>Our First Day</h1>
        <p>486 days since</p>
        </div>
      <div className="buttons">
        <ChangePhoto />
      </div>
    </Jumbotron>
    </div>
  );
}

export default Home;