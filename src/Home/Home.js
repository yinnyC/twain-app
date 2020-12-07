import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import ChangePhoto from './ChangePhoto';
import './Home.css';
function Home() { 
  return (
    <div className="Home col-md-10 ml-auto mr-auto">
      <Jumbotron className="min-vh-100 jum">
        <div className="anniversary">
        <h4>Our First Day</h4>
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