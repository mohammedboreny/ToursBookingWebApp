import logo from './logo.svg';
import './App.css';
import react from 'react';
import React, { Component } from 'react';
import Home from"./Components/Home"
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

function App() {
  return (
    render(
    <>
      
      <div className="App">
        <Home />
      </div>
    </>
  ));
  
}

export default App;
