import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



function Login() {
  return (
    <div>


<div className='container w-75 mt-5 mb-5 shadow-lg p-5' >

<Row   className='mb-5'     >

    <Col  className=' text-center' >
        <h1 className='my-5' style={{color:'blue'}} > Login</h1>
    
    
    </Col>

    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </>


    <Button className="btn btn-Success mt-5 px-4 py-2 rounded-pill mb-5"  >Login



</Button>

<p>New user? <a href="">Register</a> </p>

</Row>








</div>






    </div>
  )
}

export default Login