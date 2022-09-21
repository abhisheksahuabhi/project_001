
import './App.css';
import React from 'react';

import Login from './Components/Login';

import Signup from './Components/Signup';
import Home from './Components/Home';
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";




function App() {
  return (
    <>
   <Router>
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        
      </Switch>
    </Router> 


    
    </>
  );
}

export default App;
