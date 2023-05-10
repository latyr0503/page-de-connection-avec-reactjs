import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import logo from "../assets/téléchargement.png"
import { Link } from "react-router-dom";



function Inscription() {
    return (
        <Container className='mt-5'>
            <Row className=''>
                <Col ></Col>
                <Col lg={4} sm={12} className='  shadow p-3 mb-5 bg-body-tertiary rounded'>
                    <div className='d-flex justify-content-center'>
                        <img src={logo} className='img-fluid w-25' alt="logo-bakeli" />
                    </div>
                    <Form.Text >
                        <h5 className='text-danger text-center'>
                            S'inscrire sur notre platforme
                        </h5>
                    </Form.Text>
                    <br />
                    <Form className='text-start'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {/* <Form.Label>Votre numéro</Form.Label> */}
                            <Form.Control type="tel" placeholder="Enter votre numéro" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            {/* <Form.Label>Confirmer le Password</Form.Label> */}
                            <Form.Control type="password" placeholder="Confirmer le Password" />
                        </Form.Group>
                        <Link to="/" className=''>
                            <Button variant="warning" className='w-100' type="submit">
                                S'inscrire
                            </Button>
                        </Link>
                        <br /><br />
                        <Form.Text className="text-muted">
                            Vous possédez déjà un compte ?
                            <Link to="/" className='text-success'> Identifiez-vous </Link> <br /><br />
                        </Form.Text>
                    </Form>
                </Col>
                <Col></Col>

            </Row>
        </Container>
    )
}

export default Inscription