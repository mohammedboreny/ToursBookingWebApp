import logo from './logo.svg';
import './App.css';
import react from 'react';
import React, { Component } from 'react';
import Home from "./Components/Home"
import Detail from './Components/Detail';
import Header from './Components/Header';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
            <div className="App">
              <Header/>
        <Router>
         
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/details' element={< Detail />}></Route>
          </Routes>
        </Router>
      
          {/* <Home /> */}
        </div>
      </>
  
    )
  }
}


export default App;
