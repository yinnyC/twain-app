import React from 'react';
import { Jumbotron,Button } from 'react-bootstrap';
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
        <Button variant="primary">Change picture</Button>
      </div>
    </Jumbotron>
    </div>
  );
}

export default Home;