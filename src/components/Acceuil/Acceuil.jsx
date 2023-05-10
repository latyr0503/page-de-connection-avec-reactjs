import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Home from '../Home/Home'
import '../Acceuil/Acceuil.css'

function Acceuil() {
    return (
        <div>
            <Home />
            <Container className='banner d-flex align-items-center justify-content-center' fluid>
                <Row className='row d-flex align-items-center justify-content-center p-5'>
                    <Col>
                        <h1 className=''>
                            Bienvenue sur la page d'acceuil
                        </h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Acceuil