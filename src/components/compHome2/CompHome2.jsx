import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './compHome2.css'


const CompHome2 = (props) => {
  return (
    <>
    <Container className='home2'>
        <div className='d-flex'>
            <h2 className='numHome2'>{props.num2}</h2>
            <div className="circle1 d-flex justify-content-center align-items-center">
                <img className='imgDevice' src={props.img2} width={64} height={64} alt=""/>
            </div>
        </div>
        <div>
            <h1 className='tituloHome2'>{props.titulo2}</h1>
            <h3 className='descHome2'>{props.desc2}</h3>
            <Link to={props.to} className='saberHome2'>{props.saber}</Link>
        </div>
    </Container>    
    </>
  )
}

export default CompHome2