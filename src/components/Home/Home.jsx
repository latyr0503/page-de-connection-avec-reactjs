import React from 'react'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";


function Home() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Atelier React js</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Acceuil</Nav.Link>
                        <Nav.Link href="#link">Services</Nav.Link>
                        <Nav.Link href="#link">Portfolio</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                    <Link to="/" className=' text-black text-decoration-none'>
                            <Button variant="danger" className='float-end w-100' type="submit">
                                Déconnexion
                            </Button>
                        </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Home