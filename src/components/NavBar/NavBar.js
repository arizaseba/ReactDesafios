import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img
                        src='logo192.png'
                        width='50'
                        height='50'
                        className='d-inline-block align-top'
                        alt='Espacio Contenido Logo'
                    />
                </Navbar.Brand>
                <Navbar.Brand href="#home">React Services</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#about">Sobre Nosotros</Nav.Link>
                        <Nav.Link href="#services">Servicios</Nav.Link>
                        <Nav.Link href="#prices">Precios</Nav.Link>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                    </Nav>
                    <CartWidget countItems={3} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;