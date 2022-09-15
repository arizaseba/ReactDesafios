import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
// import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

const Layout = () => {
  return (
    <>
      <NavBar />
      <Container className='my-4'>
        <Outlet />
      </Container>
      {/* <Footer /> */}
    </>
  )
}

export default Layout