import React from 'react'
import { Container } from 'react-bootstrap'
import './compNosotros2.css'
import imgAvatar from "../../img/avatar_mujer.png"
import imgInsta from "../../img/insta.png"
import imgLinkedin from "../../img/linkedin.png"


const CompNosotros2 = () => {
  return (
    <Container className='nosotros2'>
        <div className='contenidoAvatar'>
            <div className='d-flex justify-content-center'>
                <img className="rounded-circle imgAvatar" alt="avatar1" src={imgAvatar} />
            </div>        
            <h2 className='tituloNosotros2 text-center'>Samantha Jimenez</h2>
            <h4 className='puestoNosotros2 text-center'>Diseñadora Gráfica</h4>
            <div className='d-flex justify-content-center redesNosotros'>
                <div role={'button'} className="circleAvatar d-flex justify-content-center mx-2 align-items-center">
                    <img src={imgInsta} width={26} height={26} alt=""/>                
                </div>

                <div role={'button'} className="circleAvatar d-flex justify-content-center mx-2 align-items-center">
                    <img src={imgLinkedin} width={23} height={23} alt=""/>                                
                </div>
                
            </div>
        </div>

        <div className='contenidoAvatar'>
            <div className='d-flex justify-content-center'>
                <img className="rounded-circle" alt="avatar1" src={imgAvatar} />
            </div>        
            <h2 className='tituloNosotros2 text-center'>Samantha Jimenez</h2>
            <h4 className='puestoNosotros2 text-center'>Diseñadora Gráfica</h4>
            <div className='d-flex justify-content-center redesNosotros'>
                <div role={'button'} className="circleAvatar d-flex justify-content-center mx-2 align-items-center">
                    <img src={imgInsta} width={26} height={26} alt=""/>                
                </div>

                <div  role={'button'} className="circleAvatar d-flex justify-content-center mx-2 align-items-center">
                    <img src={imgLinkedin} width={23} height={23} alt=""/>                                
                </div>
                
            </div>
        </div>
    </Container>
  )
}

export default CompNosotros2