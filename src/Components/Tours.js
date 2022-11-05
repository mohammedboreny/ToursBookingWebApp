
import { render } from "@testing-library/react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';


import Detail from "./Detail";
import { Container, Card, Col, Button, Row, Tab } from 'react-bootstrap';
const Tours = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Petra",
      info: "The city of Petra, capital of the Nabataean Arabs, is one of the most famous archaeological sites in the world, it is Located 240 km south of the capital Amman and 120 km north of the red sea town of Aqaba (see the Map), Petra the world wonder, is undoubtedly Jordan's most valuable treasure and greatest tourist attraction, and it is visited by tourists from all over the world. ",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Petra_Jordan_BW_36.JPG/1200px-Petra_Jordan_BW_36.JPG?20190610155846",
      price: "22JD"
    },
    {
      id: 2,
      name: "Jerash",
      info: "Jerash (aka Gerasa, Gerash or Gerasha) is the capital and the largest city of the Jerash Governorate in Jordan, but in ancient times it was one of the wealthiest and most cosmopolitan cities in the ancient Near East. Settled by humans as early as the Neolithic period (c. 7500-5500 BCE) and founded as a Hellenistic city in the 2nd century BCE, Jerash is today noted for its fine Roman and Byzantine ruins, which rank among the largest and best preserved in the world. Jerash is located 48 km (30 miles) north of Amman - the capital of Jordan - and 40 km (25 miles) south of Irbid, Jordan. Jerash is one of the most visited sites in Jordan after the Nabataean city of Petra.",
      image: "https://www.worldhistory.org/img/r/p/500x600/8250.jpg.webp?v=1645022711",
      price: "22JD"
    },
    {
      id: 3,
      name: "Ajlun",
      info: "Ajlun is famous for its castle. The archaeological site is popular for tourists. The surrounding hills are cooler and have more trees than elsewhere in Jordan, making it a pleasant area to spend a day or two.",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/13/75/69/c8/welcome-to-jordan-ajloun.jpg",
      price: "30JD"
    },
    {
      id: 4,
      name: "Wadi Ram",
      info: "“The Valley of the Moon”, depicted as Mars in several Hollywood feature films Wadi Rum is an Arabian fairy-tale waiting to be discovered. Home to nomadic Bedouin tribes, Wadi Rum is a a quiet getaway of stars, sand, and sun; a perfect complement from Amman’s epicenter. Once inhabited by the Nabataeans of prehistoric times, Wadi Rum allows you to get lost in large landscapes and horizon lines. The calmness of the desert is sure calm your spirit and de-clutter your thoughts. Wadi Rum is waiting for you.",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/7e/4c/1c/wadi-rum-bedouin-camp.jpg",
      price: "12JD"
    }
  ]);
  const navigate = useNavigate();

  let HandleTransition = (id) => {
    console.log(`key:${id}`);
    const listCards = items.filter((x) => x.id === id);
    navigate('/detail', { state: listCards });
  };


  return (
    <main className="container pt-5 ">

      <Container className='p-4 container-fluid'>
        <Row>
          {items.map((x) => (
            <Col className="col-sm-8 col-lg-4 pt-5">

              <Card key={x.id} onClick={() => HandleTransition(x.id)} >
                <Card.Img variant="top" src={x.image} />
                <Card.Body>
                  <Card.Title >
                    {x.name}
                  </Card.Title>
                  <Card.Text>
                    The Price is {x.price}
                  </Card.Text>
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