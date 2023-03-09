import React from 'react'
import { Badge, Container } from 'react-bootstrap'
import './compHome3.css'

const CompHome3 = (props) => {
  return (
    <div className='home3' style={{backgroundColor: props.colorFondo}}>
        <Badge className='pillHome3 text-center mt-3' >{props.categoria}</Badge>        
        <Container className='contImagen-Home3 d-flex align-items-center justify-content-center'>
            <img className='img-Home3 img-fluid' width={window.innerWidth< 720 && props.titulo ==="Wimg" ? 150 : null } src={props.imgProyecto} alt="evento1"/>
        </Container>        
        <div className='tituloProyecto align-self-end'>
            <div className='nombreProyecto text-center'>{props.titulo}</div>
        </div>
    </div>
  )
}

export default CompHome3