
import { render } from "@testing-library/react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import Detail from "./Detail";
import {Container ,Card, Col, Button, Row,Tab} from 'react-bootstrap';  
const Tours = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Petra",
      info: "",
      image: "",
      price: ""
    },
    {
      id: 2,
      name: "Another",
      info: "",
      image: "",
      price: ""
    },
    {
      id: 3,
      name: "Another1",
      info: "",
      image: "",
      price: ""
    },
    {
      id: 4,
      name: "Another 2",
      info: "",
      image: "",
      price: ""
    }
  ]);
  function Handle () { 
return console.log('Fired');
  }
  return (
      <main className="container pt-5 ">
    
      <Container className='p-4 container-fluid'>
      <Row>
      {items.map((x) => (
        <Col >
          
          <Card onClick={() => console.log("nice")} >  
          <Card.Img variant="top" src={x.image} />  
          <Card.Body>  
              <Card.Title >{x.name }</Card.Title>  
            <Card.Text>  
The Price is {x.price}            </Card.Text>  
          </Card.Body>  
            </Card>  
            </Col>
      
          
      ))}
        </Row>
          </Container>  
        </main>
    

  )

}

export default Tours;