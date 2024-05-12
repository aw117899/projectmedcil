import React from 'react'
import Container from 'react-bootstrap/esm/Container'


const About = () => {
  return (
    <div>
  
    <Container>
    <div className='row'>
     <div className='col-md-4 aboutt1'>
     <h1>MEADICAL HOSPITEL</h1>
     <p> "live to strive, will I
     end to begin, thrill
     world the in, skills my
     fly so high, will I
     dreams my chase, will I
     believe, I'll try
     purpose my find, will I
     strength and courage, supply
     limits no see, I'll
     failure from learn, I'll
     success to reach, </p>
     <button className='btn btn-success'>Read Me</button>
   
     </div>
     <div className='col-md-4 aboutt1 '>
     <h1>OPENING HOURS</h1>
     <table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">PName</th>
      <th scope="col">DNaem</th>
      <th scope="col">Day</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Waheed</td>
      <td>Alisha</td>
      <td>Monday</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Friday</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>Tuesday</td>
    </tr>
  </tbody>
</table>
     </div>
     <div className='col-md-4 aboutt1'>
     <h1>EMERGENCY CASE</h1>
     <p>"live to strive, will I
     end to begin, thrill
     world the in, skills my
     fly so high, will I
     dreams my chase, will I
     believe, I'll try
     purpose my find, will I
     strength and courage</p>
     <h1>+92 382 920 29</h1>
     <button className='btn btn-success'>Read Me</button>

     </div>
    </div>
    </Container>
    </div>
  )
}

export default About