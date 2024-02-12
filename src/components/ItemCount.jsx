import { useState } from "react";

const ItemCount = ({ stock, añadirProducto }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="controles">
        <button onClick={restar}>-</button>
        <div className="contador"><p>{contador}</p></div>
        <button onClick={sumar}>+</button>
      </div>
      <button className="terminar" onClick={()=> añadirProducto(contador)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
