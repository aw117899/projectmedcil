import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { FaHeartPulse } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaVirusCovid } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";


const Dataform = () => {
    const [data, setData] = useState({
        fname:'',
        dname:'',
        wname:'',
        phone:''
        
    })


    const changdata = (e) => {
        console.log('click me')
        const name = e.target.name
        const value = e.target.value

        setData({...data, [name]: value})
        console.log(name, value)


    }


    const [data2, setData2] = useState([])

    const Submidata = (e) => {
        e.preventDefault();
        const newData = {...data}
        console.log(data, newData)
        setData2([...data2, newData]);

        setData({fname:'' , dname:'' , wnaem: '', phone:''})


    }

  return (
    <div>
    <Container>
    <div className='row mt-5 mb-5'>
    <div className='col-md-6 dantelformleft'>
    <h4>Mak An Apoinment Fill the form</h4>

    <div>
    <div className='inputset'>
    <label className=''>Patinent Name</label>
    <input type='text' name='fname' onChange={changdata}  placeholder='full name' />
    </div>

    <div className='inputset'>
    <label className=''>Doctor Name</label>
    <input type='text'  name='dname' onChange={changdata}  placeholder='Doctor Name' />
    </div>

    <div className='inputset'>
    <label className=''>Word Name</label>
    <input type='text'  name='wname' onChange={changdata}  placeholder='Worade Name' />
    </div>

    <div className='inputset'>
    <label className=''>Phone</label>
    <input type='text'  name='phone' onChange={changdata}  placeholder='phone numbre' />

    </div>
    <button className='btn btn-success mt-3' onClick={Submidata}>Submit</button>




    </div>


    </div>
    <div className='col-md-6 mt-3 deantalformright' id='data'>
    <div className='row'>
    <div className='col-2 deantelformrig'>
    <p><FaHeartPulse /> </p>
    <p><FaUserDoctor /></p>
    <p><FaVirusCovid /></p>
    <p><FaAmbulance /></p>
    </div>
    <div className='col-10 deantelform'>
    <h4>Reahbilitaion Center</h4>
    <p>"live to strive, will I
    end to begin, thrill
    world the in, skills my
    fly so high, will I
    dreams my chase, will I</p>
    
    <h4>Meadical CounSeling</h4>
    <p>"live to strive, will I
    end to begin, thrill
    world the in, skills my
    fly so high, will I
    dreams my chase, will I</p>
    
    <h4>Qualifaid Doctor</h4>
    <p>"live to strive, will I
    end to begin, thrill
    world the in, skills my
    fly so high, will I
    dreams my chase, will I</p>
    
    </div>
    </div>
    </div>
    </div>

    <div className='shadow formdata'>
    {
        data2.map((e) => {
            return(
                <div className=''>

                <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Patinon Name</th>
      <th scope="col">Doctor Name</th>
      <th scope="col">Rome numbre</th>
      <th scope="col">phone </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{e.fname}</td>
      <td>{e.dname}</td>
      <td>{e.wname}</td>
      <td>{e.phone}</td>
    </tr>
    
  </tbody>
</table>
                </div>
            )
        })
    }

    </div>

    </Container>
    </div>
  )
}

export default Dataform



