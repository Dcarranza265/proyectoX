import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import video from '../../videos/video.gif'
import CompHome1 from '../../components/compHome1/CompHome1'
import CompHome2 from '../../components/compHome2/CompHome2'
import CompHome3 from '../../components/compHome3/CompHome3'
import './homePage.css'

import imgTrabaja1 from "../../img/trabaja-1.svg"
import imgTrabaja2 from "../../img/trabaja-2.svg"
import imgTrabaja3 from "../../img/trabaja-3.svg"
import imgTrabaja4 from "../../img/trabaja-4.svg"

import imgServicio1 from "../../img/servicio-1.svg"
import imgServicio2 from "../../img/servicio-2.svg"
import imgServicio3 from "../../img/servicio-3.svg"
import imgServicio4 from "../../img/servicio-4.svg"

import imgEvento1 from "../../img/evento-1.svg"
import imgEvento2 from "../../img/evento-2.svg"
import imgEvento3 from "../../img/evento-3.svg"
import imgEvento4 from "../../img/evento-4.png"
import imgEvento5 from "../../img/evento-5.svg"

import imgProyecto1 from "../../img/proyecto-1.svg"
import imgProyecto2 from "../../img/proyecto-2.svg"
import imgProyecto3 from "../../img/proyecto-3.svg"

import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const responsive2 = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
  return (
    <>         
    
    <div classname ="container-fluid">
        <div className={window.innerWidth >= 720 ? ' seccion1-Home mx-5 px-4 pb-5' : 'seccion1-Home mx-3 px-3 pb-3' }>        
            <Row >
                <Col lg={5}>
                    <h2 className='titulo1Home'>Crezcamos y mejoremos</h2>
                    <p className='sub1Home'>Junto contigo desarrollaremos cada paso necesario para llegar y lograr las metas de tu empresa.</p>
                    {window.innerWidth < 720 ? 
                    <div className='d-flex justify-content-center'>
                        <img className='video1Home' src={video} width={333} height ={189} alt="loading..." />
                        {/* <ReactPlayer width={333} height ={189} controls url={video1}/> */}
                    </div> : <button className='btnAgendarHome'>Agenda una Cita</button> }
                     
                </Col>
                <Col lg={7}>   
                {window.innerWidth >= 720 ? 
                    <div className='container' >
                        <img className='video1Home' src={video} width={647} height ={382} alt="loading..." />
                        {/* <ReactPlayer controls url={video1}/> */}
                    </div> :<div className='d-flex justify-content-center '><button className='btnAgendarHome'>Agenda una Cita</button></div>  }                                            
                </Col>
            </Row>        
        </div>
        <div className='seccion2-Home' >
            {window.innerWidth < 720 ? 
            <>
            <h2 className='titulo2Home'>¿Por qué trabajar con nosotros?</h2>
            <Carousel className='carouselHome'                
                responsive={responsive2}
                arrows={true} 
                renderButtonGroupOutside={true}                
                infinite= {true}                
                itemClass="d-flex align-items-center justify-content-center">
                <CompHome1 className="wow animate__animated animate__flipInY"
                    img1={imgTrabaja1} 
                    desc1 ="Trabajaremos contigo para lograr las metas propuestas "/>
                <CompHome1 className="wow animate__animated animate__flipInY"
                    img1={imgTrabaja2} 
                    desc1 ="Siempre hallamos la manera de mejorar tu marca"/>
                <CompHome1 className="wow animate__animated animate__flipInY"
                    img1={imgTrabaja3} 
                    desc1 ="Tenemos los mejores profesionales de cada rubro "/>
                <CompHome1 className="wow animate__animated animate__flipInY"
                    img1={imgTrabaja4} 
                    desc1 ="Superaremos tus expectativas y te fidelizaremos "/>
            
            </Carousel>
            </>     
           :  
           <div>
                <Row className='mx-0'>
                    <Col lg ={7}>    
                    <h2 className='titulo2Home'>¿Por qué trabajar con nosotros?</h2>                
                        <Row className='rowSeccion2'>                           
                            <Col md ={6} className="col-md-6 d-flex flex-column">
                                <CompHome1
                                    img1={imgTrabaja1} 
                                    desc1 ="Trabajaremos contigo para lograr las metas propuestas "/>
                                <CompHome1
                                    img1={imgTrabaja3} 
                                    desc1 ="Tenemos los mejores profesionales de cada rubro "/>
                            </Col>
                            <Col md ={6}>
                            <CompHome1
                                    img1={imgTrabaja2} 
                                    desc1 ="Siempre hallamos la manera de mejorar
                                    tu marca"/>
                                <CompHome1
                                    img1={imgTrabaja4} 
                                    desc1 ="Superaremos tus expectativas y te fidelizaremos "/>
                            </Col>
                        </Row>                        
                    </Col>
                </Row>
            </div>}
            
            
        </div>

        <Container className='seccion3-Home'>
            <h2 className='text-center titulo3Home pt-5'>Nuestros servicios</h2>
            <Row className='pb-5'>
                <Col>
                    <CompHome2
                        num2 = "1"
                        img2 = {imgServicio1}
                        titulo2 = "Marketing"
                        desc2 = "Crece en las redes sociales con nosotros"
                        to ="/marketing"
                        saber = "Saber más >"/>
                </Col>
                <Col>
                    <CompHome2
                        num2 = "2"
                        img2 = {imgServicio2}
                        titulo2 = "Diseño UX/UI"
                        desc2 = "Diseño propio de landing, página web, plataforma o app"
                        to ="/diseño"
                        saber = "Saber más >"/>
                </Col>
                <Col>
                    <CompHome2
                        num2 = "3"
                        img2 = {imgServicio3}
                        titulo2 = "Asesoría legal"
                        desc2 = "¡Muy pronto más detalles!"
                        saber = "Próximamente >"/>
                </Col>
                <Col>
                    <CompHome2
                        num2 = "4"
                        img2 = {imgServicio4}
                        titulo2 = "Incubación"
                        desc2 = "¡Muy pronto más detalles!"
                        saber = "Próximamente >"/>
                </Col>
            </Row>
        
        </Container>        

        <Container fluid className='seccion4-Home'>
            <h2 className='titulo4Home text-center'>Eventos en los que hemos participado</h2>
            <Carousel className='carouselHome' 
                responsive={responsive}
                arrows={true} 
                renderButtonGroupOutside={true}                
                infinite= {true}                
                itemClass="d-flex align-items-center justify-content-center">
                <img src={imgEvento1} alt="imgEvento1"/>
                <img src={imgEvento2} alt="imgEvento2"/>
                <img src={imgEvento3} alt="imgEvento3"/>
                <img src={imgEvento4} alt="imgEvento4"/>
                <img src={imgEvento5} alt="imgEvento5"/>
                
            </Carousel>
        </Container>  
        <div className='container-fluid seccion5-Home'>
            
            <h2 className='titulo5Home text-center'>Nuestros proyectos</h2>
            <Carousel className='carousel2Home'
                responsive={responsive2}
                arrows={true} 
                renderButtonGroupOutside={true}                
                infinite= {true}
                itemClass="d-flex align-items-center justify-content-center">
                <CompHome3
                    categoria = "Branding"
                    colorFondo = "rgba(243, 248, 250, 1)"
                    imgProyecto = {imgProyecto1}
                    titulo = "House of English"
                />
                <CompHome3
                    categoria = "Diseño"
                    colorFondo = "rgba(37, 37, 37, 1)"
                     imgProyecto = {imgProyecto2}
                    titulo = "Jurimetrics"
                />
                <CompHome3
                    categoria = "Tecnologia"
                    colorFondo = "rgba(153, 0, 255, 1)"
                    imgProyecto = {imgProyecto3}
                    titulo = "Wimg"
                />
            </Carousel>           

        
        </div>      
    </div>      
    
    
    
    
    </>
  )
}

export default HomePage