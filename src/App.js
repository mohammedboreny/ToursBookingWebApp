import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Home from "./Components/Home"
import Detail from './Components/Detail';
import Header from './Components/Header';
import Tours from './Components/Tours';

 class App extends Component  {
   render() {
       return (
         <>
           <Router>
             <Header />
             <Routes> 
             <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/detail' element={< Detail />}></Route>
             </Routes>
             </Router>
       </>
   
       )
    }
  
  
    
}

export default App;

