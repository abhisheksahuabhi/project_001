import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Menu from './Menu';
import Footer from './Footer';
function Signup() {
  return (
    <>
     {/* Header*/}
     <Menu/>
   
    {/* signup for started*/}
    <MDBContainer fluid className='p-4'>

      <MDBRow >

        <MDBCol md='4' offsetMd="2" className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='4'>
          
          <MDBCard className='my-5'>
            <MDBCardBody className='p-4'>
            <h3 style={{textAlign:'center'}} className='pb-2'>Sign Up</h3>
              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>


              <Button variant="primary" className='w-100 mb-4' size='md'>Sign Up</Button>{' '}

              <div className="text-center">

                <p>or</p>
                <Button variant="outline-primary" className='w-100 mb-4' size='md'>Sign Up with Google</Button>{' '}

            

                <MDBBtn tag='a' color='dark' className='mx-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                
             

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
{/* footer*/}
<Footer/>
    </>
  );
}

export default Signup;