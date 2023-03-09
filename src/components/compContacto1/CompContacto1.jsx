import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import {collection, addDoc} from 'firebase/firestore'
import './compContacto1.css'
import { db } from '../../firebase/Firebase'
const CompContacto1 = () => {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [servicio, setServicio] = useState('')
    const [detalle, setDetalle] = useState('')
    
    const formularioCollection = collection( db, "formulario")

    const agregarForm = async (e) => {
        e.preventDefault()
        if(nombre !== "" && correo !=="" && servicio !== "" && detalle !==""){
             await addDoc(formularioCollection, 
            {nombre: nombre, correo: correo, servicio: servicio, detalle: detalle})  
            alert("Datos enviados")
            limpiarForm(e)
        }else{
            alert("Faltan completar datos")
        }
             
    }

    const limpiarForm = (e) => {
        e.preventDefault()
        setNombre("")
        setCorreo("")
        setDetalle("")
        setServicio("")
    }

    const handleChange = (event) =>{
        setServicio(event.target.value)
    }
  return (
    <Container className='contacto1'>
        <h2 className='tituloContacto1 text-center'>Contáctanos</h2>
        <Form onSubmit={agregarForm} className='formContainer'>
            <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label className='textoForm'>Nombre y Apellidos</Form.Label>
                <Form.Control type="text" placeholder="Escribe tu nombre" 
                    value={nombre} onChange={(e)=> setNombre(e.target.value)}/>        
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCorreo">
                <Form.Label className='textoForm mt-1'>Correo</Form.Label>
                <Form.Control type='email' placeholder="ejemplo@gmail.com" 
                value={correo} onChange={(e)=> setCorreo(e.target.value)}/>        
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCorreo">
                <Form.Label className='textoForm mt-1'>¿Qué servicio deseas?</Form.Label>
                <Form.Select value={servicio} onChange={handleChange} aria-label="Selecciona un servicio">
                    <option value="">Open this select menu</option>
                    <option value="Marketing" >Marketing Digital</option>
                    <option value="Diseño">Diseño UX/UI</option>            
                </Form.Select>                    
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCorreo">
                <Form.Label className='textoForm mt-1'>¿En qué podemos ayudarte?</Form.Label>                
                <Form.Control
                as="textarea"
                placeholder="Coméntanos"
                style={{ height: window.innerWidth < 720 ? '150px' :'250px'  }}
                value={detalle} onChange={(e)=> setDetalle(e.target.value)}
                />    
            </Form.Group>   
            <div className='d-flex justify-content-evenly' style={{marginTop : "35px"}}>
                <button type='submit' className='btnContacto1'>Enviar</button>
                <button onClick={limpiarForm} className='btnContacto2'>Limpiar datos</button>  
            </div>                                           
        </Form>
            
        
    </Container>
  )
}

export default CompContacto1