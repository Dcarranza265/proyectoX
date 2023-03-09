import React from 'react'

import './compNosotros1.css'

const CompNosotros1 = (props) => {
  return (
    <div className={props.titulo ==="Visión" ? "nosotros1 d-flex flex-row-reverse justify-content-center" : "nosotros1 d-flex justify-content-center" }>
        <img src={props.imgNosotros} className="imgNosotros1" alt="" />
        <div className={props.titulo ==="Visión" ? "nosotrosCuadro2" : "nosotrosCuadro1" } >
            <h1 className='compNosotrosTitulo text-start'>{props.titulo}</h1>
            <h1 className='compNosotrosDesc text-start'>{props.desc}</h1>
        </div>
    </div>
  )
}

export default CompNosotros1