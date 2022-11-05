
import { render } from "@testing-library/react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Link, useNavigate} from 'react-router-dom';


import Detail from "./Detail";
import {Container ,Card, Col, Button, Row,Tab} from 'react-bootstrap';  
const Tours = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Petra",
      info: "The city of Petra, capital of the Nabataean Arabs, is one of the most famous archaeological sites in the world, it is Located 240 km south of the capital Amman and 120 km north of the red sea town of Aqaba (see the Map), Petra the world wonder, is undoubtedly Jordan's most valuable treasure and greatest tourist attraction, and it is visited by tourists from all over the world. ",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Petra_Jordan_BW_36.JPG/1200px-Petra_Jordan_BW_36.JPG?20190610155846",
      price: "22"
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
  const navigate = useNavigate();

  let HandleTransition = (id) => { 
    console.log(`key:${id}`);
    const listCards = items.filter((x) => x.id === id);
    navigate('/detail', { state:listCards });
  };
    
  
  return (
      <main className="container pt-5 ">
    
      <Container className='p-4 container-fluid'>
      <Row>
      {items.map((x) => (
        <Col >
          
          <Card key={x.id} onClick={() => HandleTransition(x.id)} >  
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