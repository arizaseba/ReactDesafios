import { Container, Nav, Navbar, } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar({ cartList }) {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="md" className='shadow-sm'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src='logow.svg'
                            width='100'
                            height='35'
                            className='d-inline-block align-center'
                            alt='Weracer Logo'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav >
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#about">Gamer</Nav.Link>
                            <Nav.Link href="#services">Oficina</Nav.Link>
                            <Nav.Link href="#contact">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget cartList={cartList} />
                </Container>
            </Navbar>
        </header>
    );
}

export default NavBar;