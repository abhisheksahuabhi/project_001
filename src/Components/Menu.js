import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

let Menu=()=>{
    return(
        
        <>
       

        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Tutors4you</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto" >
                 
                    <Nav.Link href="/">Home</Nav.Link>
                 
                    <Nav.Link to="/about">About</Nav.Link>
              
                    <NavDropdown title="Services" id="collasible-nav-dropdown">

                    
                    <NavDropdown.Item to="/findtutor">
                        Find tutors
                    </NavDropdown.Item>
                   
                    <NavDropdown.Item to="/findstudent">
                       Find Students
                    </NavDropdown.Item>
                   
                    <NavDropdown.Divider />

                    </NavDropdown>
                   
                    <Nav.Link to="/contact">Contact Us</Nav.Link>
                    
                    
                </Nav>
                <Nav>
                
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login" eventKey={2}>
                    Log In
                </Nav.Link>
                   
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

           
        </>
        
    )
}

export default Menu;