import React from 'react'
import { Container } from 'react-bootstrap'
import './compServicios1.css'

const CompServicios1 = (props) => {
  return (
    <>    
    <Container fluid className='servicios1 '>      
      <h1 className='titleServicios1 text-center'>{props.titulo1}</h1>
      <Container className='d-flex justify-content-center'>
        <p className='subtitleServicios2 text-center'>{props.subtitulo1}</p>         
      </Container>          
    </Container> 
    </>
  )
}

export default CompServicios1