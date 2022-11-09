import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Button from '../Button';
import './nav.css';

const NavigationBar = () => {
    return (
        <Navbar variant="light" >
            <Container fluid>
                <div className="brand-wrapper d-flex justify-content-center align-items-center">
                    <div className="n-circel"></div>
                    {/* <Navbar.Brand href="#home"><span>Rian</span> Muhammad Firdaus</Navbar.Brand> */}
                    <Navbar.Brand href="#home"><span>R.M.F</span></Navbar.Brand>
                </div>
                <Nav className="menu-wrapper d-none d-md-block">
                    <div className='d-flex'>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#skills">Services</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    </div>
                </Nav>
                <Nav.Link href="#contact">
                    <Button title={'Contact'} />
                </Nav.Link>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;