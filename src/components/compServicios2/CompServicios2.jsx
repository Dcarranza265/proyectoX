import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SubCompServicios2 from '../subCompServicios2/SubCompServicios2'
import './compServicios2.css'

const CompServicios2 = (props) => {
  return (
    <Row className='justify-content-lg-center rowCompServicio2'>
        <Col lg={10} className="groupComponentServicio2 shadow p-3 bg-body rounded">  
            <Row>                
                <Col md={6}>
                    <SubCompServicios2 className="p-3"
                        titulo = {props.tituloServ1}
                        descripcion = {props.descServ1}  
                        imgMark = {props.imgServ1}                  
                    />
                    <SubCompServicios2 
                        titulo = {props.tituloServ2}
                        descripcion = {props.descServ2}  
                        imgMark = {props.imgServ2}                  
                    />
                </Col>
                <Col md={6}>
                    <SubCompServicios2
                            titulo = {props.tituloServ3}
                            descripcion = {props.descServ3}    
                            imgMark = {props.imgServ3}                
                        />
                    <SubCompServicios2 
                            titulo = {props.tituloServ4}
                            descripcion = {props.descServ4}  
                            imgMark = {props.imgServ4}                  
                        />
                </Col>
               
            </Row>
        </Col> 
    </Row>
  )
}

export default CompServicios2