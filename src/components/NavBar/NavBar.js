import { Container, Nav, Navbar } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar(props) {

    return (
        <header>
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
                        <CartWidget productList={props.productList} />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavBar;