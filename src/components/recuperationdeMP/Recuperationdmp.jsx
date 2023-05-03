import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import logo from "../assets/téléchargement.png"
import { Link } from "react-router-dom";



function Recuperationdmp() {
    return (
        <Container className='mt-5'>
            <Row className=''> 
                <Col></Col>
                <Col  className=' shadow p-3 mb-5 bg-body-tertiary rounded'>
                    <img src={logo} className='mx-5 img-fluid' alt="logo-bakeli" />
                    <Form className='text-start'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> Entrer votre Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Button variant="warning" className='w-100' type="submit">
                            Recupére le mot de passe
                        </Button>
                        <br /><br />
                        <Form.Text className="text-muted">
                            Vous possédez déjà un compte ?
                            <Link to="/Inscription" className='text-success'> S'inscrire </Link>
                            <br />
                            <Link to="/" className='text-success'> Identifiez-vous </Link> <br /><br />

                        </Form.Text>
                    </Form>
                </Col>
                <Col ></Col>

            </Row>
        </Container>
    )
}

export default Recuperationdmp