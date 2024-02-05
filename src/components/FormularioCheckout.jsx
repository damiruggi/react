import React from 'react'


const FormularioCheckout = ({datosForm, guardarDatosInput, enviarOrden}) => {
  return (
    <form onSubmit={enviarOrden}>
        <div class="form-floating mb-3 mt-3">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" className='form-control' id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput}/>
        </div>

        <div class="form-floating mb-3 mt-3">
        <label htmlFor="telefono">Telefono</label>
        <input type="number" className='form-control' id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput}/>
        </div>

        <div className='form-floating mb-3 mt-3'>
        <label htmlFor="email">Email</label>
        <input type="email" className='form-control' id="email" name="email" value={datosForm.email} onChange={guardarDatosInput}/>
        </div>

        <button type="submit" className='button_primary'>Enviar</button>
    </form>
  )
}

export default FormularioCheckout
