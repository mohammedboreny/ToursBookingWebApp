import React from 'react'
import Tours from './Tours';
import {Container ,Card, Col, Button, Row,Tab} from 'react-bootstrap';  

import {useLocation} from 'react-router-dom';

function Detail() {
  const location = useLocation();
  return (
    <>
      <Container className='pt-5 h-auto'>
      <Row>
        <img src={location.state[0].image}/>
        </Row>
        <Row>
        <div className='pt-5 text-center h1'>{location.state[0].name}</div>
        </Row>
       
        <Row>
        <div className='pt-5 text-uppercase'>{location.state[0].info}</div>
        </Row>
        <Row>
        <div className='pt-5 text-center h3'> Ticket Price ={location.state[0].price}</div>
      </Row>
        </Container>
    </>
  )
}

export default Detail