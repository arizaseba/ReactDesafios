import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <div className="p-4 bg-secondary">
                <Container className="d-flex flex-column align-items-center">
                    <Navbar.Brand href="/">
                        <img
                            src='/logow.svg'
                            width='100'
                            height='35'
                            className='d-inline-block align-center'
                            alt='Weracer Logo'
                        />
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/category/gamer">Gamer</Nav.Link>
                        <Nav.Link href="/category/office">Oficina</Nav.Link>
                        <Nav.Link href="/contact">Contacto</Nav.Link>
                    </Nav>
                </Container>
            </div>

        </footer>
    )
}

export default Footer