import { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const {carrito, precioTotal, borrarProducto, borrarTodo} = useContext(CartContext)

  if (carrito.length ===0){
    return (
      <div className="item-list-container">
        <h2>No hay productos en el carrito</h2>
        <Link to="/" className="button_primary">Volver al inicio</Link>
      </div>
    )
  }
  return (
    <div className="item-list-container">
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>
            <div className="imagedetail">
              <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="detail">
              <h3>{producto.nombre}</h3>
              <p>Cantidad: {producto.cantidad}</p>
              <h3>Precio: {producto.precio}</h3>
              <button onClick={() => borrarProducto(producto.id)} className="button_secondary">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <div className="total">
        <h2>Precio total: {precioTotal()}</h2>
        <div className="totalButtons">
            <button onClick={borrarTodo} className="button_secondary">Eliminar carrito</button>
            <Link to="/checkout" className="button_primary">Continuar compra</Link>
        </div>
      </div>
    </div>
  )
}
export default Carrito