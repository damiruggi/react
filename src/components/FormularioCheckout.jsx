import React from 'react'

const FormularioCheckout = ({datosForm, guardarDatosInput, enviarOrden}) => {
  return (
    <form onSubmit={enviarOrden}>
        <div className="mb-3 mt-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input type="text" className='form-control' id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput}/>
        </div>

        <div className="mb-3 mt-3">
        <label htmlFor="telefono"className="form-label">Telefono</label>
        <input type="number" className='form-control' id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput}/>
        </div>

        <div className='mb-3 mt-3'>
        <label htmlFor="email"className="form-label">Email</label>
        <input type="email" className='form-control' id="email" name="email" value={datosForm.email} onChange={guardarDatosInput}/>
        </div>

        <div className='mb-3 mt-3'>
        <label htmlFor="email"className="form-label">Repetir Email</label>
        <input type="email" className='form-control' id="repetir-email" name="repetirEmail" value={datosForm.repetirEmail} onChange={guardarDatosInput}/>
        </div>

        <button type="submit" className='button_primary'>Enviar</button>
    </form>
  )
}

export default FormularioCheckout
