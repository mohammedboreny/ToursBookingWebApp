import React from 'react'
import Tours from './Tours';
import 'bootstrap/dist/css/bootstrap.min.css';  

import {useLocation} from 'react-router-dom';

function Detail() {
  const location = useLocation();
  console.log(location.state);
  console.log(location.state[0].name);
  return (
    <>
      
        <div className='pt-5'>{location.state[0].name}</div>
    
    </>
  )
}

export default Detail