import { useContext, useState } from "react"

import FormularioCheckout from "./FormularioCheckout"
import { CartContext } from "../context/CartContext"
import { collection, addDoc } from "firebase/firestore"
import db from "../db/db"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const Checkout = () => {
    const [datosForm, setDatosForm] = useState ({
        nombre: "",
        telefono: "",
        email: "",
        repetirEmail: "",
    })

    const {carrito, precioTotal} = useContext(CartContext)

    const [idOrden, setIdOrden] = useState(null)

    const guardarDatosInput = (event) => {
        setDatosForm({...datosForm, [event.target.name] : event.target.value})
    }

    const enviarOrden = (event) => {
        event.preventDefault()
        const orden = {
            comprador : {...datosForm},
            productos: [...carrito],
            fecha: String(Date.now()),
            estado: "No entregado",
            total: precioTotal()
        }

if(datosForm.email !== datosForm.repetirEmail){
    Swal.fire("Los campos de email no son iguales");
    return
}

        const ordenesRef = collection(db, "ordenes")
        addDoc(ordenesRef, orden)
            .then((respuesta) => {
                setDatosForm({
                    nombre: "",
                    telefono: "",
                    email: ""
                })
                
                setIdOrden(respuesta.id)

            })
            .catch((error) => console.log(error))
    }

    return(
        <div className="item-list-container">
            {
                idOrden ? (
                    <div className="formulario">
                        <h2>Orden generada con exito</h2>
                        <p>Guarde el id de su orden: {idOrden}</p>
                        <Link to="/" className="button_primary">Seguir comprando</Link>
                    </div>
                ) : (
                <FormularioCheckout datosForm={datosForm} guardarDatosInput={guardarDatosInput} enviarOrden={enviarOrden} />
                )
            }
        </div>
    )
}

export default Checkout