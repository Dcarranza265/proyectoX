import React from 'react'
import './subCompServicios2.css'
// import device1 from "../../img/mark-1.svg"
import { Col, Container, Row } from 'react-bootstrap'

const SubCompServicios2 = (props) => {
  return (
    <Container className={window.innerWidth < 768 ? "py-1 pt-4" : "py-4"}>
        <Row>
            <Col xs={4} className ="d-flex justify-content-end ">
                <div className="circleSubComp d-flex justify-content-center align-items-center">
                    <img className='imgMark' src={props.imgMark} width={88} height={88} alt=""/>
                </div>                
            </Col>
            <Col xs={8}>
                <Container>
                    <h4 className='tituloSubCompServicio2'>{props.titulo}</h4>
                    <h5 className='descripcionSubCompServicio2'>{props.descripcion}</h5>
                </Container>
            </Col>
        </Row>
    </Container>
  )
}

export default SubCompServicios2