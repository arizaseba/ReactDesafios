import { Container } from "react-bootstrap"

const Contact = () => {
    return (
        <>
            <div className='d-flex flex-column text-white align-items-center justify-content-center' style={{ letterSpacing: 5, backgroundColor: "#2f4e7c", height: 175, width: "100%", objectFit: 'cover' }}>
                <div className='mb-2 text-uppercase display-3 fw-bold'>contacto</div>
                <div style={{ width: 100, height: 5, backgroundColor: "white" }}></div>
            </div>
            <Container className='my-4'>
                <div>Contact</div>
            </Container>
        </>
    )
}

export default Contact