import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import logo from "../assets/téléchargement.png"
import { Link } from "react-router-dom";

function Connexion() {
    return (
        <Container className='mt-5'>
            <Row className=''>
                <Col></Col>
                <Col className=' shadow p-3 mb-5 bg-body-tertiary rounded'>
                    <img src={logo} className='mx-5 img-fluid w-25' alt="logo-bakeli" />
                    <Form className='text-start'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Text className="text-muted">
                            <Link to="/Recuperationdmp" className='text-success'>Mot de passe oublié </Link><br/><br/>
                        </Form.Text>

                        <Button variant="warning" className='w-100' type="submit">
                            Se connecter
                        </Button>
                        <br/><br/>  
                        <Form.Text className="text-muted">
                        <Link to="/Inscription" className='text-success'> S'inscrire </Link> <br/><br/>
                        </Form.Text>
                    </Form>
                </Col>
                <Col></Col>

            </Row>
        </Container>
    )
}

export default Connexion