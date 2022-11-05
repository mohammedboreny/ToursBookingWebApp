import React from 'react'
import Tours from './Tours';
import Jumbotron from 'react-bootstrap/Jumbotron';

import {useLocation} from 'react-router-dom';

function Detail() {
  const location = useLocation();

  return (<>
    <Jumbotron>
      <h1>{location.name} </h1>
</Jumbotron>
    </>
  )
}

export default Detail