import React from 'react'
import { Container } from 'react-bootstrap'
import './contactoPage.css'
import imgContacto1 from '../../img/img-contacto.svg'
import CompContacto1 from '../../components/compContacto1/CompContacto1'

const ContactoPage = () => {
  return (
    <div className='seccion-Contacto'>
      <Container fluid className='seccion1-Contacto'>
        <h2 className='text-center titulo1Contacto '>Crece y mejora con nosotros</h2>
      </Container>

      {window.innerWidth < 1024 ? 
      <>
      <div className='compContacto'><CompContacto1/></div>
      <div className='seccion2-Contacto'>        
      <h2 className='texto-Contacto'>Dinos en que podemos ayudarte
        y nos pondremos en contacto contigo lo más pronto posible.
      </h2>  
      <div className='d-flex justify-content-center'><img className='imgContacto1' src={imgContacto1} style={{marginTop : "30px"}} alt="" /></div>
                 
    </div> 
      </>: 
      <div className='d-flex'>
        <div className='seccion2-Contacto'>        
          <span className='texto-Contacto'>Dinos en que podemos ayudarte
            y nos pondremos en contacto contigo lo más pronto posible.
          </span>  

          <img src={imgContacto1} style={{marginTop : "30px"}} alt="" />           
        </div>
        <div className='compContacto'><CompContacto1/></div>
        
      </div>}

      
    </div>
  )
}

export default ContactoPage