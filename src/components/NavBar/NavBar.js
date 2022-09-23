import { Container, Nav, Navbar, } from 'react-bootstrap';
import CartWidget from '../Cart/CartWidget';

function NavBar() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="md" className='shadow-sm'>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src='/logow.svg'
                            width='100'
                            height='35'
                            className='d-inline-block align-center'
                            alt='Weracer Logo'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav >
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/category/gamer">Gamer</Nav.Link>
                            <Nav.Link href="/category/office">Oficina</Nav.Link>
                            <Nav.Link href="/contact">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        </header>
    );
}

export default NavBar;