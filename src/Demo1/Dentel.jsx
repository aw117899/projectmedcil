import React, { useState } from 'react'
import Dent from '../assets/h5.png';
import Container from 'react-bootstrap/esm/Container';
import  dentalData from './Dentaldata';
// import Dentaldata from './Dentaldata';




const Dentel = () => {

    const [selected, setSelected] = useState(0);
    const tLenght = dentalData.length;

  return (
    <div className='shadow'>
    <Container>
    <div className='row'>
    <div className='col-md-6 denterltext'>
    <div className='denteltextbox shadow'>
    <p>{dentalData[selected].name}</p>
    <h1>{dentalData[selected].heading}  </h1>
    <p>{dentalData[selected].review}</p>
    </div>
    <button className='btn'>Read More</button>
    <button className='btn' onClick={() => (
        selected === 0 ? setSelected(tLenght - 1) :setSelected((prev) => prev - 1)
    )}>Next</button>
    
    </div>

    <div className='col-md-6 mt-5 '>
    <img src={dentalData[selected].img} alt='' className='w-100 mt-5' />
    </div>
    </div>
    </Container>
    </div>
  )
}

export default Dentel