import React from 'react'
import { Container } from 'react-bootstrap'
import './compHome1.css'
import 'animate.css';



const CompHome1 = (props) => {
  
  return (
    <>
    <Container className='home1 d-flex flex-column justify-content-center wow animate__animated animate__flipInY '>
        <div className='d-flex justify-content-center'>
            <img src={props.img1} alt="trabajo" height={66} width="66px"/>
        </div>
        
        <h2 className='desc1Home mx-2'>{props.desc1}</h2>
        {/* Trabajaremos contigo para lograr las metas propuestas */}

    </Container>
    
    </>
  )
}

export default CompHome1