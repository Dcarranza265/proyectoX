import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './compServicios3.css'
const CompServicios3 = (props) => {
  return (
    <Container fluid className='fondoCompServicio3' style={{backgroundColor : props.colorFondo}}>
        <Row className='justify-content-lg-center py-5'>
            <Col lg={8} className="mt-4">
                <Row>
                    <Col md={8}>
                        <Container className='compServicio3texto'>
                            <h1 className='compServicio3titulo'>Da el primer paso</h1> 
                            <h3 className='SubServicio3 sub2'>Reúnete con nosotros para lograr tus objetivos</h3>        
                        </Container>
                    </Col>
                    <Col md={4}>
                        <Container className={window.innerWidth < 768 ? "d-flex justify-content-center" : "d-flex justify-content-end"} >
                            <button className='btnServicio3'>Agenda una Cita</button>        
                        </Container>
                    </Col>
                </Row>
            </Col>
        </Row>

    </Container>
  )
}

export default CompServicios3