import React from 'react'
import './compDiseño2.css'
const CompDiseño2 = (props) => {
  return (
    <div className='diseño2'>
        <div className='contTituloDiseño2 d-flex justify-content-center align-items-center'>
            <h2 className='tituloDiseño2'>{props.titulo}</h2>
        </div>
        <div className='d-flex justify-content-center contImagenDiseño2'><img className='imgDiseño2' src={props.img} alt="" /></div>

    </div>
  )
}

export default CompDiseño2