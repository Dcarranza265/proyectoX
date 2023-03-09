import React from 'react'
import './compDiseño1.css'

const CompDiseño1 = (props) => {
  return (
    <div className='diseño1'>
        <div className='d-flex justify-content-center pt-4'>
            <img src={props.img} alt="" height={window.innerWidth < 720 ? 32 : null}  />
        </div>
        <h2 className='tituloDiseño1 text-center'>{props.titulo}</h2>
        <h3 className='descTituloDiseño1 text-center'>{props.desc}</h3>
    </div>
  )
}

export default CompDiseño1