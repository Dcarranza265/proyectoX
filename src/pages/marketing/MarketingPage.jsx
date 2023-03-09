import React from 'react'
import { Container } from 'react-bootstrap'
import './marketingPage.css'

import CompMarketing1 from '../../components/compMarketing1/CompMarketing1'
import CompServicios1 from '../../components/compServicios1/CompServicios1'
import CompServicios2 from '../../components/compServicios2/CompServicios2'
import CompServicios3 from '../../components/compServicios3/CompServicios3'

import imgMark1 from "../../img/mark-1.svg"
import imgMark2 from "../../img/mark-2.svg"
import imgMark3 from "../../img/mark-3.svg"
import imgMark4 from "../../img/mark-4.svg"

import imgPlan1 from "../../img/plan-1.svg"
import imgPlan2 from "../../img/icono-destacado.png"
import imgPlan3 from "../../img/plan-3.svg"
import imgPlan4 from "../../img/plan-4.png"

import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"

const MarketingPage = () => {
  const responsive = {    
    tablet: {
      breakpoint: { max: 1020, min: 720 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 1
    }
  };
  return (
    <>
    <CompServicios1
      titulo1 = "Servicio de Marketing Digital"
      subtitulo1 = "Potenciaras tus redes sociales y lograrás tus objetivos. Nosotros nos encargamos de la planificación, ejecución de estrategia, campañas, entre otros."
    />
    <CompServicios2
      tituloServ1 = "Más seguidores, más clientes"
      descServ1 ="Se logrará esto debido al contenido de valor que se dará a tus clientes"
      imgServ1 = {imgMark1}
      tituloServ2 = "Reconocimiento de marca"
      descServ2 ="Con una efectiva estrategia conectarás con tu audiencia logrando fidelizar a tus clientes"
      imgServ2 = {imgMark2}
      tituloServ3 = "Aumenta las ventas"
      descServ3 ="Gracias a la buena gestión de publicidad y campañas en redes sociales"
      imgServ3 = {imgMark3}
      tituloServ4 = "Respuesta eficaz"
      descServ4 ="Mediante un monitoreo constante en tus redes se obtendrá un contacto inmeditato con tu cliente"
      imgServ4 = {imgMark4}
    />
    <CompServicios3 colorFondo = {window.innerWidth < 720 ? "rgba(255, 255, 255, 1)" : "#FC3A3C"}/>
    <Container fluid className='seccion1-Marketing'>
      <h2 className='text-center titulo1Marketing '>Nuestros planes</h2>
      {window.innerWidth < 720 ? 
      <Carousel className='carouselMarketing'                
        responsive={responsive}
        arrows={true} 
        renderButtonGroupOutside={true}                
        infinite= {true}                
        itemClass="d-flex align-items-center justify-content-center">
        <CompMarketing1
          imgPlan = {imgPlan1}
          tituloPlan = "Enrédate básico"
          plan1 = "Cronograma de publicaciones"
          plan2 = "8 publicaciones mensuales (gráficas)"
          plan3 = "2 reels (videos) mensuales (Lunes a viernes)"
          plan4 = "Y mucho mas"      
        />

        <CompMarketing1
          imgPlan = {imgPlan2}
          tituloPlan = "Enrédate VIP"
          plan1 = "Cronograma de publicaciones"
          plan2 = "Estrategia de contenidos"
          plan3 = "10 publicaciones mensuales (gráficas)"
          plan4 = "3 reels (videos) mensuales (Lunes a viernes)"
          plan5 = "Y mucho más"      
        />

        <CompMarketing1
          imgPlan = {imgPlan3}
          tituloPlan = "Enrédate X"
          plan1 = "Cronograma de publicaciones"
          plan2 = "Estrategia de contenidos"
          plan3 = "Análisis óptimo de la cuenta y sus competidores"
          plan4 = "10 publicaciones mensuales (gráficas)"    
          plan5 = "Y mucho más"  
        />

        <CompMarketing1
          imgPlan = {imgPlan4}
          tituloPlan = "Plan personalizado"
          plan1 = "Todo lo que necesite tu marca"
          plan2 = "Nos adaptamos de acuerdo a lo que busques"
          plan3 = "Primera asesoría gratuita"
          plan4 = "Precios competitivos y de acuerdo al mercado"      
          plan5 = "Y mucho más"
        />
      </Carousel>      
      :       
      <div className='d-flex mt-5'>
      <CompMarketing1
        imgPlan = {imgPlan1}
        tituloPlan = "Enrédate básico"
        plan1 = "Cronograma de publicaciones"
        plan2 = "8 publicaciones mensuales (gráficas)"
        plan3 = "2 reels (videos) mensuales (Lunes a viernes)"
        plan4 = "Y mucho mas"      
      />

      <CompMarketing1
        imgPlan = {imgPlan2}
        tituloPlan = "Enrédate VIP"
        plan1 = "Cronograma de publicaciones"
        plan2 = "Estrategia de contenidos"
        plan3 = "10 publicaciones mensuales (gráficas)"
        plan4 = "3 reels (videos) mensuales (Lunes a viernes)"
        plan5 = "Y mucho más"      
      />

      <CompMarketing1
        imgPlan = {imgPlan3}
        tituloPlan = "Enrédate X"
        plan1 = "Cronograma de publicaciones"
        plan2 = "Estrategia de contenidos"
        plan3 = "Análisis óptimo de la cuenta y sus competidores"
        plan4 = "10 publicaciones mensuales (gráficas)"    
        plan5 = "Y mucho más"  
      />

      <CompMarketing1
        imgPlan = {imgPlan4}
        tituloPlan = "Plan personalizado"
        plan1 = "Todo lo que necesite tu marca"
        plan2 = "Nos adaptamos de acuerdo a lo que busques"
        plan3 = "Primera asesoría gratuita"
        plan4 = "Precios competitivos y de acuerdo al mercado"      
        plan5 = "Y mucho más"
      />

      </div>}
      
      

      

    </Container>
    </>
  )
}

export default MarketingPage