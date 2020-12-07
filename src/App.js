import { HashRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Header/Header'
import Chat from './Chat/Chat'
import Home from './Home/Home'
import Album from './Album/Album'
import Plan from './Plan/Plan'

function App() { 
  return (
    <Router>
       <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/chat" component={Chat} />
      <Route path="/album" component={Album} />
      <Route path="/plan" component={Plan} /> 
      {/* <Route path="/plan" render={()=>{
        return <Plan a="Hello" />
      }}/> */}
    </div> 
    </Router>
   
  );
}
// the props will be defined at line 20
export default App;
