import { Nav } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <div className='d-flex align-items-center justify-content-center text-center bg-info p-5 text-white shadow'>
                <div className='d-inline mt-4'>
                    <a href="/">
                        <img
                            src='/logow.svg'
                            width='200'
                            height='35'
                            className='d-inline-block align-center'
                            alt='Weracer Logo'
                        />
                    </a>
                    <div className='mt-4'>
                        <Nav.Link className='p-1' href="/">Inicio</Nav.Link>
                        <Nav.Link className='p-1' href="/category/gamer">Gamer</Nav.Link>
                        <Nav.Link className='p-1' href="/category/office">Oficina</Nav.Link>
                        <Nav.Link className='p-1' href="/contact">Contacto</Nav.Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer