import React from 'react'
import { Container } from 'react-bootstrap'
import './compMarketing1.css'


const CompMarketing1 = (props) => {
  return (
    <Container fluid className='marketing1'>

        <div className='d-flex justify-content-center'><img className='imgPlanMarketing1' src={props.imgPlan} alt="" /></div>
        <h2 className='planMarketing1 text-center'>{props.tituloPlan}</h2>
        <div className='mt-3 listaPlanes'>
          <div className='d-flex detalleMarketing1'>
          <div className='circleIcon'><i className="bi bi-check"></i></div>
            <span>{props.plan1}</span>  
          </div>
          
          <div className='d-flex detalleMarketing1'>
          <div className='circleIcon'><i className="bi bi-check"></i></div>
            <span>{props.plan2}</span>  
          </div>

          <div className='d-flex detalleMarketing1'>
          <div className='circleIcon'><i className="bi bi-check"></i></div>
            <span>{props.plan3}</span>  
          </div>

          <div className='d-flex detalleMarketing1'>
          <div className='circleIcon'><i className="bi bi-check"></i></div>
            <span>{props.plan4}</span>  
          </div>

          <div className='d-flex detalleMarketing1'>
          <div className='circleIcon' hidden= { props.plan5 == null ? true : false} ><i className="bi bi-check"></i></div>
            <span>{props.plan5}</span>  
          </div>
        </div>
        <button className= {props.tituloPlan === "Enrédate VIP" ? 'btnMarketing2' : 'btnMarketing1' }  >Más Información</button> 
        

    </Container>
  )
}

export default CompMarketing1