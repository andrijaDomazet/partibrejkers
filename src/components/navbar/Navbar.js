import React from 'react'
import Navbar from '../../../node_modules/react-bootstrap/Navbar';
import Nav from '../../../node_modules/react-bootstrap/Nav';
import NavDropdown from '../../../node_modules/react-bootstrap/NavDropdown';
// import Form from '../../../node_modules/react-bootstrap/Form';
// import FormControl from '../../../node_modules/react-bootstrap/FormControl';
// import Button from '../../../node_modules/react-bootstrap/Form';
import logo from '../../images/logo.jpg'
import './Navbar.scss'

function NavbarMain() {
    return (
        <Navbar bg="dark" expand="lg" fixed="top">
            <Navbar.Brand href="#home">
                <img src={logo} 
                    width="60"
                    height="100%"
                    className="d-inline-block align-top" 
                    alt="logo"/>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#tour">Tour</Nav.Link>
                    <Nav.Link href="#news">News</Nav.Link>
                    <Nav.Link href="#photos">Photos</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>					
            </Navbar.Collapse>
        </Navbar>
    )    
}

export default NavbarMain

