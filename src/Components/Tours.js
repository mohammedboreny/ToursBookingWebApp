import { useState } from "react";
import React, { Component } from 'react';
const Tours = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Petra",
      info: "",
      image: "",
      price: ''
    },
    {
      id: 2,
      name: "Another",
      info: "",
      image: "",
      price: ''
    }, {
      id: 3,
      name: "Another",
      info: "",
      image: "",
      price: ''
    }, {
      id: 4,
      name: '',
      info: "",
      image: "",
      price: ''
    }]);
  return (

   
   
    <>
       { items.map((x) => (
        <div className="card" style="width: 18rem;">
          <img src={x.image} className="card-img-top" alt={x.info} />
          <div className="card-body">
            <div> {x.id} </div>
            <h5 className="card-title">{x.name}</h5>
            <p className="card-text"> Ticket Price = {x.price}</p>
            <a href="#" className="btn btn-primary">More Info</a>
          </div>
        </div>

))}
        </>
      
   
  )
}

export default Tours