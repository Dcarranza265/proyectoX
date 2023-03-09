import React from 'react'
import './diseñoPage.css'
import CompServicios1 from '../../components/compServicios1/CompServicios1'
import CompServicios2 from '../../components/compServicios2/CompServicios2'

import imgDis1 from "../../img/diseño-brand.png"
import imgDis2 from "../../img/diseño-brand3.png"
import imgDis3 from "../../img/diseño-brand2.png"
import imgDis4 from "../../img/diseño-brand4.png"
import CompServicios3 from '../../components/compServicios3/CompServicios3'
import CompDiseño1 from '../../components/compDiseño1/CompDiseño1'

import imgProceso1 from "../../img/proceso-1.svg"
import imgProceso2 from "../../img/proceso-2.svg"
import imgProceso3 from "../../img/proceso-3.svg"
import CompDiseño2 from '../../components/compDiseño2/CompDiseño2'

import img1Seccion2 from "../../img/diseño-final-1.png"
import img2Seccion2 from "../../img/diseño-final-2.png"
import img3Seccion2 from "../../img/diseño-final-3.png"
import img4Seccion2 from "../../img/diseño-final-4.png"
import { Row, Col } from 'react-bootstrap'

const DiseñoPage = () => {
  return (
    <>
    <div className='diseño-body'>
    <CompServicios1
    titulo1 ="Servicio de Diseño UX/UI"
    subtitulo1 ="Potenciaras tus redes sociales y lograrás tus objetivos. Nosotros nos encargamos de la planificación, ejecución de estrategia, campañas, entre otros."/>
    
    <CompServicios2
      tituloServ1 = "Tu identidad en el diseño"
      descServ1 ="Representará a tu marca y proyectará bien tus objetivos para lograr el éxito"
      imgServ1 = {imgDis1}
      tituloServ2 = "Diseño responsivo"
      descServ2 ="Cada elemento de tu web se adapta a las proporciones de cualquier pantalla"
      imgServ2 = {imgDis2}
      tituloServ3 = "Diseño intuitivo"
      descServ3 ="Los visitantes puedan navegar fácilmente en tu web"
      imgServ3 = {imgDis3}
      tituloServ4 = "Centrado en tus usuarios"
      descServ4 ="Aumenta el tráfico de tu audiencia logrando mejorar la satisfacción y confianza en tus clientes"
      imgServ4 = {imgDis4}
    />

    <div className='seccion1-Diseño'>
      <h2 className='titulo1-Diseño text-center'>Nuestro Proceso</h2>

      {window.innerWidth >= 1024 ? 
      <div className='contenido1-Diseño d-flex justify-content-center'>
      <CompDiseño1
        img = {imgProceso1}
        titulo = "Research"
        desc = "Detectamos las necesidades profundas de los usuarios."
      /> 
      <div className='d-flex align-items-center'><span className='operacion1-Diseño mx-3'>+</span></div>
      <CompDiseño1
        img = {imgProceso2}
        titulo = "Wireframes"
        desc = "Creamos las pantallas accesibles e intuitivas para los usuarios."
      />
      <div className='d-flex align-items-center'><span className='operacion1-Diseño mx-3'>+</span></div>
      <CompDiseño1
        img = {imgProceso3}
        titulo = "Testeos remotos"
        desc = "Mediante estos podemos detectar posibles errores."
      />
      <div className='d-flex align-items-center'><span className='operacion1-Diseño mx-3'>=</span></div>
      <CompDiseño1
        img = {imgProceso1}
        titulo = "Research"
        desc = "Detectamos las necesidades profundas de los usuarios."
      />
    </div> 
    :
    <Row className='d-flex' style={{marginRight : 0}}>       
        
        <Col className='d-flex justify-content-center'>
          <CompDiseño1
          img = {imgProceso1}
          titulo = "Research"
          desc = "Detectamos las necesidades profundas de los usuarios."
          /> 
          <div className='d-flex align-items-center'><span className='operacion1-Diseño mx-3'>+</span></div>  
          <CompDiseño1
          img = {imgProceso2}
          titulo = "Wireframes"
          desc = "Creamos las pantallas accesibles e intuitivas para los usuarios."
          />            
        </Col>        

        

        <Col className='d-flex justify-content-center' >
          <CompDiseño1
          img = {imgProceso3}
          titulo = "Testeos remotos"
          desc = "Mediante estos podemos detectar posibles errores."
          />          
          <div className='d-flex align-items-center'><h2 className='operacion1-Diseño mx-3'>=</h2></div>     
          <CompDiseño1
          img = {imgProceso3}
          titulo = "Wireframes"
          desc = "Creamos las pantallas accesibles e intuitivas para los usuarios."
          />
        </Col>

        
      </Row> 
      }

    </div>

    <CompServicios3 colorFondo = {window.innerWidth < 720 ? "rgba(255, 255, 255, 1)" : "rgba(235, 22, 54, 1)"} />

    <div className='seccion2-Diseño'>
      <h2 className='titulo2Diseño text-center'>Te diseñamos - Rediseñamos</h2>
        <Row className='d-flex contDiseño2'>
          <Col className='d-flex justify-content-center' lg={3} md={4} xs ={6}>
          <CompDiseño2
            titulo ="Landing pages"
            img = {img1Seccion2}
            />            
          </Col>

          <Col className='d-flex justify-content-center' lg={3} md={4} xs ={6}>
          <CompDiseño2
            titulo ="Páginas web"
            img = {img2Seccion2}
            />            
          </Col>

          <Col className='d-flex justify-content-center' lg={3} md={4} xs ={6}>
          <CompDiseño2
            titulo ="Apps"
            img = {img3Seccion2}
            />            
          </Col>

          <Col className='d-flex justify-content-center' lg={3} md={4} xs ={6}>
          <CompDiseño2
            titulo ="Dashboards"
            img = {img4Seccion2}
            />            
          </Col>
        </Row>
      
    </div>
    </div>




    
    
    
    </>
    
  )
}

export default DiseñoPage