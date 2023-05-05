import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import validation from '../assets/validation.mp4'
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'


function Pagedrecuperationdmdp() {
    return (
        <Container>
            <Row>
                <Col lg={4} sm={12} className='mx-auto text-center'>
                    <div className='d-flex justify-content-center'>
                        <ReactPlayer url={validation} playing loop />
                    </div>

                    <p>
                        Vérifier votre E-mail pour recupérer votre mot de passe
                    </p>

                    <Link to="/" className='text-black text-decoration-none'>
                        <Button variant="warning" className='w-100' type="submit">
                            Se connecter
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Pagedrecuperationdmdp