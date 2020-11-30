import { HashRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Header'
import Chat from './Chat'
import Home from './Home'

function App() { 
  return (
    <Router>
       <div className="App">
      <Header />
      <Route path="/home" component={Home} />
      <Route path="/chat" component={Chat} />
    </div>
    </Router>
   
  );
}

export default App;
