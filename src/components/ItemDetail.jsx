import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const ItemDetail = ({ producto }) => {
  const [toggle, setToggle] = useState(false)

  const {añadirProductoAlCarrito} = useContext(CartContext)

  const añadirProducto = (contador) => {
    setToggle(true)
    const productoCarrito = {...producto, cantidad:contador}
    añadirProductoAlCarrito(productoCarrito)
  }

  return (
    <div className="item-detail">
      <img className="imagen" src={producto.imagen} alt={producto.nombre} />
      <div className="texto">
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p className="precio">${producto.precio}</p>
        {toggle ? (
          <>
            <Link to ="/Carrito" className="button_secondary">Ir al carrito</Link>
            <Link to="/" className="button_primary">Seguir comprando</Link>
          </>
          ) : (
        <ItemCount stock={producto.stock} añadirProducto={añadirProducto}/>
        )}
      </div>
    </div>
  );
};
export default ItemDetail;
