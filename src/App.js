import { HashRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Header/Header'
import Chat from './Chat/Chat'
import Home from './Home/Home'
import Album from './Album/Album'

function App() { 
  return (
    <Router>
       <div className="App">
      <Header />
      <Route path="/home" component={Home} />
      <Route path="/chat" component={Chat} />
      <Route path="/album" component={Album} />
    </div>
    </Router>
   
  );
}

export default App;
