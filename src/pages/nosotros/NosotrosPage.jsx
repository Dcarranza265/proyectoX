import React from 'react'
import { Container } from 'react-bootstrap'
import CompNosotros1 from '../../components/compNosotros1/CompNosotros1'
import './nosotrosPage.css'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"

import mision from "../../img/mision.png"
import vision from "../../img/vision.png"
import valores from "../../img/valores.png"
import CompNosotros2 from '../../components/compNosotros2/CompNosotros2'

const NosotrosPage = () => {
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
  return (
  <>
    <Container fluid className='seccion1-Nosotros text-center '>
      <h2 className='titulo1Nosotros '>Nosotros</h2>
      <h4 className='sub1Nosotros text-center'> Estamos dispuestos a apoyar a los emprendedores de nuestro país; transformando los 
        distintos problemas que tiene nuestra sociedad en soluciones innovadoras, viables, sostenibles
         y responsables con el medio ambiente.
      </h4>

      <Container className='compNosotros1' >
        <CompNosotros1
        imgNosotros = {mision}
        titulo = "Misión"
        desc = "Somos una organización enfocada en brindar servicios que apoyen a la transformación digital de las empresas para lograr el éxito esperado, utilizando creatividad, innovación y tecnología."
        />
      </Container>

      <Container className='compNosotros1' >
      <CompNosotros1
        imgNosotros = {vision}
        titulo = "Visión"
        desc = "En un mundo estrechamente interrelacionado por las tecnologías de información, queremos llegar a ser líder en la provisión de soluciones innovadoras de marketing digital y desarrollo de software."
        />
      </Container>

      <Container className='compNosotros1' >
      <CompNosotros1
        imgNosotros = {valores}
        titulo = "Valores"
        desc = "Somos una organización enfocada en brindar servicios que apoyen a la transformación digital de las empresas para lograr el éxito esperado, utilizando creatividad, innovación y tecnología."
      />
      </Container>
    </Container>
    <Container fluid className='seccion2-Nosotros'>
      <p className='titulo2Nosotros text-center'>Nuestro Equipo </p>

      <Carousel className='carouselNosotros' 
        responsive={responsive}
        arrows={true} 
        renderButtonGroupOutside={true}                
        infinite= {true}                
        itemClass="d-flex align-items-center justify-content-center">
        <CompNosotros2/>
        <CompNosotros2/>
        <CompNosotros2/>
        <CompNosotros2/>
        <CompNosotros2/>
        <CompNosotros2/>
        <CompNosotros2/>
                
      </Carousel>

    </Container>


  </>
    
  )
}

export default NosotrosPage