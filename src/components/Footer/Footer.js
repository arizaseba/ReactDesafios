import React from 'react'
import { Container, Nav, NavbarBrand } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <div className="p-4 bg-secondary text-white">
                <Container className='d-flex flex-column align-items-center'>
                    <div className='row'>
                        <NavbarBrand href="/">
                            <img
                                src='/logow.svg'
                                width='150'
                                height='35'
                                className='d-inline-block align-center'
                                alt='Weracer Logo'
                            />
                        </NavbarBrand>
                    </div>
                    <div className='row g-2 text-center'>
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/category/gamer">Gamer</Nav.Link>
                        <Nav.Link href="/category/office">Oficina</Nav.Link>
                        <Nav.Link href="/contact">Contacto</Nav.Link>
                    </div>
                </Container>
            </div>

        </footer>
    )
}

export default Footer