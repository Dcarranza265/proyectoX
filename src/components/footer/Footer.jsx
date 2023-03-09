import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className='fondoFooter'>
        <div className= {window.innerWidth < 768 ? "d-flex flex-column" : "d-flex justify-content-between align-items-center py-3"}>
          <div className = {window.innerWidth < 768 ? "d-flex flex-column" : "d-flex"}>
            <span className= {window.innerWidth < 768 ? 'footerText text-center' : 'footerText ps-5 text-center'}>© 2021 Proyecto X. </span>
            <span className= {window.innerWidth < 768 ? 'footerText2 text-center' : 'footerText2 text-center'}> Todos los Derechos Reservados</span>
          </div>
           
            <div className= {window.innerWidth < 768 ? "d-flex justify-content-center align-items-end pt-2 pb-2" : "pe-5"}>
              <img src={require('../../img/face.png')} alt="facebook" className='px-3'/>
              <img src={require('../../img/insta.png')} alt="insta" className='px-3' />
              <img src={require('../../img/linkedin.png')} alt="linkedin" className='px-3'/>
            </div>
        </div>

    </Container>
  )
}

export default Footer